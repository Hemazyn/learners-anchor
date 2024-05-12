/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { faqData } from "../constants";

const FAQ = () => {
     const [expandedIndex, setExpandedIndex] = useState(null);

     const toggleAnswer = (index) => {
          if (expandedIndex === index) {
               setExpandedIndex(null);
          } else {
               setExpandedIndex(index);
          }
     };

     return (
          <div id="faq" className="faq-container flex flex-col items-center gap-2 md:gap-4 py-5 md:py-10">
               <h2 className="text-lg md:text-3xl font-semibold text-gray-800">Frequently Asked Questions</h2>
               <div className="faq-list w-full md:w-3/5 gap-3 px-2">
                    {faqData.map((faq, index) => (
                         <div key={index} className="faq-item gap-4 mb-2" >
                              <div className="question flex flex-row justify-between py-2 px-2 mb-2 border-s-4 border-fuchsia-700" onClick={() => toggleAnswer(index)}>
                                   <h3 className="font-bold text-base md:text-lg">{faq.question}</h3>
                                   <span className="cursor-pointer text-lg text-fuchsia-900 font-bold">{expandedIndex === index ? "-" : "+"}</span>
                              </div>
                              {expandedIndex === index && <p className="answer px-2 md:px-3 text-xs md:text-base ">{faq.answer}</p>}
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default FAQ;
