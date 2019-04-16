import React from 'react';
import ReconstructionAccordion from './ReconstructionAccordion';
import {
Accordion,
AccordionItem,
AccordionItemTitle,
AccordionItemBody
} from 'react-accessible-accordion';

const OtherProceduresAccordion = (props) => {
    return (
        <Accordion>
            <AccordionItem>
                <AccordionItemTitle>
                    <h3>Lymph node surgery </h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>A type of lymph node surgery called sentinel lymph node biopsy (SLNB) is generally done as part of a lumpectomy or mastectomy for Stages 1, 2, and 3 breast cancer. It isn’t generally done for Stage 0 (ductal carcinoma in situ or DCIS) breast cancer.</p>
                    <p>Lymph nodes are often removed during surgery to determine if cancer has spread beyond the breast. The first one or two lymph nodes that a tumor drains into are called sentinel lymph nodes.</p>
                    <p>In an SLNB, the surgeon injects a blue dye or radioactive substance (or both) into the breast to identify the sentinel lymph node(s). The nodes that are stained by the dye or substance with a small amount of radiation (which helps the surgeon find the cancer during surgery using a handheld radiation-detection device) are then removed and checked for cancer cells. Depending on the results, additional lymph node surgery may be needed.
                    </p>
     <p>Some women may develop lymphedema (arm swelling) after lymph node surgery or radiation.</p>
                   
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <h3>Reconstruction</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>Reconstruction is a surgical procedure to restore the shape of the breast after a mastectomy. Reconstruction may be immediate (performed at the same time as your mastectomy) or delayed (a separate surgery done at a later time). Not everyone is a candidate for immediate reconstruction, so discuss your options with your surgeon. Your plastic surgeon will be able to help you decide which type of reconstruction is right for you:</p> 
                  <ReconstructionAccordion />
                </AccordionItemBody>
            </AccordionItem>
        </Accordion>
    );
}

export default OtherProceduresAccordion;
