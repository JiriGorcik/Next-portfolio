"use client";

import { motion } from "framer-motion";
import toast from "react-hot-toast";

import SectionHeading from "@/components/section-heading";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import SubmitBtn from "@/components/submit-btn";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const { pending } = useFormStatus(); //TODO

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            return toast.error(error);
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          type="email"
          name="email"
          className="h-14 px-4 rounded-lg borderBlack outline-none dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          placeholder="Your email"
          required
          maxLength={500}
        />

        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 outline-none dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />

        <SubmitBtn />
      </form>
    </motion.section>
  );
};
export default Contact;
