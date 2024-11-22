"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "What are some good flight destinations from Abuja?",
    answer:
      "Popular destinations from Abuja include Lagos, Dubai, London, New York, and Nairobi.",
  },
  {
    question: "What is the best airport to fly out of Abuja?",
    answer:
      "Nnamdi Azikiwe International Airport (ABV) is the primary airport serving Abuja.",
  },
  {
    question:
      "How long before a flight should I arrive at the airport in Abuja?",
    answer:
      "It's recommended to arrive 2 hours before domestic flights and 3 hours before international flights.",
  },
  {
    question: "How can I find last-minute flight deals from Abuja?",
    answer:
      "Check online travel platforms, airline websites, or use apps specializing in last-minute deals.",
  },
  {
    question: "What is the cheapest place to fly from Abuja?",
    answer:
      "Domestic flights to Lagos are generally the cheapest, while international flights to Accra are cost-effective.",
  },
];

const FAQComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container sx={{ py: 4 }}>
      {/* Title */}
      <Typography variant="h5" gutterBottom>
        Frequently asked questions about flying from Abuja
      </Typography>

      {/* FAQ Accordions */}
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          sx={{
            mb: 1,
            backgroundColor: "#1E1E1E",
            color: "white",
            border: "1px solid #333",
            borderRadius: "4px",
            boxShadow: "none",
            "&:before": {
              display: "none", // Remove default MUI divider line
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FAQComponent;
