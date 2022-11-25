import Image from "next/image";
import { useRef, useState } from "react";

import { ContactFormData } from "@app/types";
import { AppWrap, MotionWrap } from "@app/wrapper";
import { images, socialLinks } from "@app/constants";
import { sendEmailMessage } from "@app/utils";
import { MediaIcon } from "@app/components";
import { FaPaperPlane } from "@react-icons/all-files/fa/FaPaperPlane";
import { BiLoaderCircle } from "@react-icons/all-files/bi/BiLoaderCircle";
import useIntersectionObserver from "@app/hooks/useIntersectionObserver";

import style from "./Contact.module.scss";
import ToastifySuccess, { ToastifySuccessRef } from "@app/components/Toastify/ToastifySuccess";

const RESUME_URL = "/paalamugan-software-engineer-resume.pdf";
const RESUME_DOWNLOAD_FILE_NAME = "paalamugan-software-engineer-resume.pdf";

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const toastifySuccessRef = useRef<ToastifySuccessRef>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [isSocialMediaInterSecting, contactNoteRef] = useIntersectionObserver();

  const { name, email, message, subject } = formData;

  const handleChangeInput = (e: any) => {
    const { name: fieldName, value } = e.target;
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (loading) return;

    if (!formData.name) {
      return nameRef.current?.focus();
    }

    if (!formData.email) {
      return emailRef.current?.focus();
    }

    if (!formData.subject) {
      return subjectRef.current?.focus();
    }

    if (!formData.message) {
      return messageRef.current?.focus();
    }

    setLoading(true);

    sendEmailMessage(formData as unknown as Record<string, unknown>)
      .then(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        toastifySuccessRef.current?.show();
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <h2 className="head-text mt-4">
        Get In <span>Touch</span>
      </h2>
      <div className={style["app__contact-container"]}>
        <div className="grid w-full grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className={style["contact_note"]}>
              <div className={`mb-5 ${style["contact_note_bottom"]}`}>
                <h3>Quick Contact</h3>
                <p>
                  Don&apos;t like forms? Send me an
                  <a
                    href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=contact@paalamugan.com&amp;cc=work@paalamugan.com&amp;su=Need to discuss with you Mr. Paalamugan&amp;body=Hi there, I need to talk"
                    target="_blank"
                    className={style["mail_text"]}
                    rel="noreferrer noopener"
                  >
                    &nbsp;email
                  </a>
                  .&nbsp;😊
                </p>
              </div>
              <div className={`mb-5 ${style["contact_note_bottom"]}`} ref={contactNoteRef}>
                <div className={style["contact_info"]}>
                  <span className="mt-1 mr-3">
                    <Image src={images.gmail} alt="Gmail" width={18} height={18} />
                  </span>
                  <div>
                    <h4>Email</h4>
                    <p>contact@paalamugan.com</p>
                  </div>
                </div>
                {isSocialMediaInterSecting && (
                  <div className={style["contact_info"]}>
                    <span className="mt-1 mr-3">
                      <Image src={images.social} alt="Social Media" width={18} height={18} />
                    </span>
                    <div>
                      <h4>Social Media</h4>
                      <ul className={`flex mt-1 ${style["list-unstyled"]}`}>
                        {socialLinks.map((social) => (
                          <li key={social.icon}>
                            <a
                              href={social.url}
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label={social.name}
                              title={social.name}
                            >
                              <MediaIcon
                                icon={social.icon}
                                style={{ color: `var(--${social.icon}-color)` }}
                              />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                <div className={style["contact_info"]}>
                  <span className="mt-1 mr-3">
                    <Image src={images.location} alt="Location" width={18} height={18} />
                  </span>
                  <div>
                    <h4>Location</h4>
                    <p>Chennai, India</p>
                  </div>
                </div>
                <div className={style["contact_info"]}>
                  <span className="mt-1 mr-3">
                    <Image src={images.resume} alt="Resume" width={18} height={18} />
                  </span>
                  <div>
                    <h4>Resume</h4>
                    <a
                      href={RESUME_URL}
                      target="_blank"
                      rel="noreferrer noopener"
                      download={RESUME_DOWNLOAD_FILE_NAME}
                      className={style["resume-link"]}
                    >
                      Download
                    </a>
                    <span className="mx-1">|</span>
                    <a
                      href={RESUME_URL}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={style["resume-link"]}
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-8">
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-2 w-100">
                <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                  <div className={style["form-group"]}>
                    <label htmlFor="name">
                      Name<span className={style["text-danger"]}>*</span>
                    </label>
                    <input
                      ref={nameRef}
                      id="name"
                      name="name"
                      type="text"
                      className={`${style["form-control"]} ${style["input_short"]}`}
                      required
                      placeholder="Enter your name"
                      value={name}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className={style["form-group"]}>
                    <label htmlFor="email">
                      Email<span className={style["text-danger"]}>*</span>
                    </label>
                    <input
                      ref={emailRef}
                      id="email"
                      name="email"
                      type="email"
                      className={style["form-control"]}
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
                <div className={style["form-group"]}>
                  <label htmlFor="subject">
                    Subject<span className={style["text-danger"]}>*</span>
                  </label>
                  <input
                    ref={subjectRef}
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className={style["form-control"]}
                    placeholder="Enter your subject"
                    value={subject}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className={style["form-group"]}>
                  <label htmlFor="message">
                    Message<span className={style["text-danger"]}>*</span>
                  </label>
                  <textarea
                    ref={messageRef}
                    id="message"
                    className={style["form-control"]}
                    name="message"
                    rows={5}
                    required
                    placeholder="Enter your message"
                    value={message}
                    onChange={handleChangeInput}
                  />
                </div>
              </div>
              <div className="flex justify-center sm:justify-start">
                <button
                  className="inline-flex items-center px-5 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primary/95"
                  type="submit"
                  name="submit_message"
                  disabled={loading}
                >
                  {!loading ? (
                    <>
                      <FaPaperPlane className="mr-2" />
                      <span>Send Message</span>
                    </>
                  ) : (
                    <>
                      <BiLoaderCircle className={`mr-2 ${style["loading"]}`} />
                      <span>Sending...</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastifySuccess
        ref={toastifySuccessRef}
        message="Thank you for reach out to me, I will get back to you asap."
      />
    </>
  );
};

export default AppWrap(MotionWrap(Contact), "contact", "bg-white");
