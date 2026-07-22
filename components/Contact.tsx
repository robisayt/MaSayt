"use client";

import { useRef, useState } from "react";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";

const WEB3FORMS_ACCESS_KEY = "0cd491aa-81a1-47a2-9e4e-a9199910a2f5";

type ToastState = { show: boolean; success: boolean; title: string; text: string };

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState>({ show: false, success: true, title: "", text: "" });

  const showToast = (success: boolean, title: string, text: string) => {
    setToast({ show: true, success, title, text });
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 5000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const data = await res.json();

      if (data.success) {
        form.reset();
        showToast(true, "Дякую!", "Ваше повідомлення успішно надіслано.");
      } else {
        showToast(false, "Не вдалося надіслати", "Спробуйте ще раз трохи пізніше або напишіть у Telegram.");
      }
    } catch {
      showToast(false, "Помилка з\u2019єднання", "Перевірте інтернет-з\u2019єднання і спробуйте ще раз.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-24 md:py-32" style={{ background: "var(--tint)" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-10 sm:gap-16">
        <Reveal>
          <p className="font-mono text-sm mb-3" style={{ color: "var(--accent)" }}>// контакти</p>
          <h2 className="font-display font-bold text-[1.7rem] sm:text-3xl md:text-[2.6rem] tracking-tight mb-5">
            Обговоримо ваш проєкт?
          </h2>
          <p className="text-lg leading-relaxed mb-10 max-w-md" style={{ color: "var(--text-soft)" }}>
            Розкажіть коротко про вашу ідею — і ми відповімо протягом одного робочого дня з планом та орієнтовним
            терміном.
          </p>
          <SocialLinks />
        </Reveal>

        <Reveal>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="card rounded-2xl p-6 md:p-8 space-y-5"
            noValidate
          >
            <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
            <input type="hidden" name="subject" value="Нове повідомлення з сайту-портфоліо" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

            <div>
              <label htmlFor="f-name" className="block text-sm font-medium mb-2">Ім&apos;я</label>
              <input id="f-name" name="name" type="text" required className="w-full rounded-xl px-4 py-3" placeholder="Як до вас звертатися?" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="f-phone" className="block text-sm font-medium mb-2">Телефон</label>
                <input id="f-phone" name="phone" type="tel" className="w-full rounded-xl px-4 py-3" placeholder="+380 ..." />
              </div>
              <div>
                <label htmlFor="f-email" className="block text-sm font-medium mb-2">Email</label>
                <input id="f-email" name="email" type="email" required className="w-full rounded-xl px-4 py-3" placeholder="you@mail.com" />
              </div>
            </div>
            <div>
              <label htmlFor="f-message" className="block text-sm font-medium mb-2">Повідомлення</label>
              <textarea id="f-message" name="message" rows={4} required className="w-full rounded-xl px-4 py-3 resize-none" placeholder="Коротко про ваш проєкт..." />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="btn-press w-full text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 disabled:opacity-70"
              style={{ background: "var(--accent)" }}
            >
              {submitting ? "Надсилаю..." : "Обговорити проєкт"}
            </button>
            <p className="text-xs text-center" style={{ color: "var(--text-soft)" }}>
              Заповнюючи форму, ви погоджуєтесь на обробку контактних даних для відповіді на запит.
            </p>
          </form>
        </Reveal>
      </div>

      <div
        className={`toast ${toast.show ? "show" : ""} fixed bottom-6 left-6 z-50 max-w-xs card rounded-xl px-5 py-4 shadow-xl flex items-start gap-3`}
      >
        <svg
          width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke={toast.success ? "#16A34A" : "#DC2626"}
          strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
          className="mt-0.5 shrink-0"
        >
          {toast.success ? <path d="M20 6 9 17l-5-5" /> : <><path d="M12 8v5M12 16h.01" /><circle cx="12" cy="12" r="9" /></>}
        </svg>
        <div>
          <p className="font-semibold text-sm mb-0.5">{toast.title}</p>
          <p className="text-xs" style={{ color: "var(--text-soft)" }}>{toast.text}</p>
        </div>
      </div>
    </section>
  );
}
