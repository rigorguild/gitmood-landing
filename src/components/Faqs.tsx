import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Does Gitmood integrate with GitHub?',
      answer:
        'Absolutely! Gitmood integrates seamlessly with GitHub to monitor your pull requests and gather feedback.',
    },
    {
      question: 'Can I pay for my subscription via purchase order?',
      answer: 'Absolutely, we are happy to accept purchase orders as a form of payment.',
    },
    {
      question: 'How do I get started with Gitmood?',
      answer:
        'Getting started with Gitmood is easy! Simply sign up for a free beta account, integrate with your GitHub repository, and start gathering feedback on your pull requests.',
    },
  ],
  [
    {
      question: 'What was that testimonial about GitHub feedback all about?',
      answer:
        'Gitmood helps you gather and organize feedback from your team on GitHub pull requests, but the ultimate responsibility for addressing that feedback lies with your team.',
    },
    {
      question:
        'Gitmood sounds amazing, but why do I feel so compelled to use it?',
      answer:
        'This is the power of an excellent user experience. Gitmood is designed to be both visually appealing and highly functional.',
    },
    {
      question:
        'I found other companies with similar names, are you sure you can use Gitmood?',
      answer:
        'We’ve done our due diligence and believe Gitmood is unique and well-suited for our brand. We’re confident in our choice.',
    },
  ],
  [
    {
      question: 'How do you generate reports?',
      answer:
        'Our system automatically generates detailed reports based on the feedback and data collected from your pull requests, providing you with valuable insights.',
    },
    {
      question: 'Can we expect more features for feedback management?',
      answer: 'Absolutely! We’re constantly working on adding new features and improving Gitmood based on user feedback.',
    },
    {
      question: 'I lost my password, how do I get into my account?',
      answer:
        'Click on the “Forgot Password” link on the login page, and we’ll send you instructions to reset your password.',
    },
  ],
]


export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
