// import React from "react";
import { Container, Accordion } from "react-bootstrap";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of properties do I find on Plotus?",
      answer:
        "Plotus features houses, Lodges, Land, apartments, and commercial spaces for rent, hire, or sale.",
    },
    {
      question: "How accurate are property listings on Plotus?",
      answer:
        "We strive for accuracy, but users are responsible for verifying property details with owners or agents.",
    },
    {
      question: "Do I need to create an account to use Plotus?",
      answer:
        "Yes, registration is required to access full features and contact property owners or agents.",
    },
    {
      question: "How does Plotus protect user data and privacy?",
      answer:
        "We employ robust security measures and adhere to data protection policies to safeguard user information.",
    },
    {
      question: "How do I make payments or transactions on Plotus?",
      answer:
        "We facilitate connections between users and property owners or agents: transactions are done through Plotus Pay.",
    },
    {
      question: "Is Plotus involved in payment processing or transactions?",
      answer:
        "Yes, Plotus has Plotus Pay that assists our clients to transfer the payments directly to the property owners from their Mobile Money or Bank at zero cost.",
    },
    {
      question: "How do I contact Plotus support?",
      answer:
        "You can reach us through our: website using the contact us page, application, WhatsApp, phone call, or email for assistance or feedback.",
    },
    {
      question: "How does Plotus handle user feedback and complaints?",
      answer:
        "We value user input and address concerns promptly to ensure a smooth user experience.",
    },
  ];

  return (
    <div className="faq-section py-5">
      <Container>
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <Accordion>
          {faqs.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </div>
  );
};

export default FAQ;
