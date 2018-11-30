import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion';

const BrcaAccordion = (props) => {
  return (
    <Accordion>  
      <AccordionItem>
        <AccordionItemTitle>
          <h4>For women with a BRCA 1/2 mutation </h4>
        </AccordionItemTitle>
        <AccordionItemBody>
          { props.children }
        </AccordionItemBody>
      </AccordionItem>
    </Accordion>  
  );
}

export default BrcaAccordion;
