import Image from "next/image";
import { useState } from "react";

import { ContactFormData } from "@app/types";
import { AppWrap, MotionWrap } from "@app/wrapper";
import { images, socialLinks } from "@app/constants";
import { sendEmailMessage } from "@app/utils";
import { MediaIcon } from "@app/components";

import style from "./Contact.module.scss";
import { BiLoaderCircle, FaPaperPlane } from "@app/lazy/react-icons";

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const { name, email, message, subject } = formData;

  const handleChangeInput = (e: any) => {
    const { name: fieldName, value } = e.target;
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (loading) return;

    const { toast } = await import("react-toastify");

    if (!formData.name) {
      return toast.error("Please enter your name");
    }

    if (!formData.email) {
      return toast.error("Please enter your email");
    }

    if (!formData.subject) {
      return toast.error("Please enter your subject");
    }

    if (!formData.message) {
      return toast.error("Please enter your message");
    }

    setLoading(true);

    sendEmailMessage(formData as unknown as Record<string, unknown>)
      .then(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        toast.success(`Thank you for reaching out to me, I will get back to you soon.`);
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <h2 className="head-text">
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
                    rel="noreferrer"
                  >
                    &nbsp;email
                  </a>
                  .&nbsp;😊
                </p>
              </div>
              <div className={`mb-5 ${style["contact_note_bottom"]}`}>
                <div className={style["contact_info"]}>
                  <span className="mt-1 mr-3 text-primary">
                    <Image src={images.gmail} alt="Gmail" width={18} height={18} layout="fixed" />
                  </span>
                  <div>
                    <h4>Email</h4>
                    <p>contact@paalamugan.com</p>
                  </div>
                </div>
                <div className={style["contact_info"]}>
                  <span className="mt-1 mr-3 text-primary">
                    <Image
                      src={images.social}
                      alt="Social Media"
                      width={18}
                      height={18}
                      layout="fixed"
                    />
                  </span>
                  <div>
                    <h4>Social Media</h4>
                    <ul className={`flex mt-1 ${style["list-unstyled"]}`}>
                      {socialLinks.map((social) => (
                        <li key={social.icon}>
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={social.icon}
                            title={social.icon}
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
                <div className={style["contact_info"]}>
                  <span className="mt-1 mr-3 text-primary">
                    <Image
                      src={images.location}
                      alt="Location"
                      width={18}
                      height={18}
                      layout="fixed"
                    />
                  </span>
                  <div>
                    <h4>Location</h4>
                    <p>Chennai, India</p>
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
                  <label htmlFor="mesage">
                    Message<span className={style["text-danger"]}>*</span>
                  </label>
                  <textarea
                    id="mesage"
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
              <button
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primary/95"
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Contact, style["app__contact"]), "contact", "bg-white");
