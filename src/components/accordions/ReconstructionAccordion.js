import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion';

const ReconstructionAccordion = (props) => {
    return (
<Accordion>
        
                     
                                  <AccordionItem>
                                      <AccordionItemTitle>
                                          <h3>Two-stage or single-stage implant reconstruction</h3>
                                      </AccordionItemTitle>
                                      <AccordionItemBody>
                                          <p>Both two-stage and single-stage implant reconstruction place a silicone or saline (salt water) implant in the breast area, either behind or in front of the muscle on the chest wall. Some women are candidates for an immediate implant (single stage), and some women are not and require an expansion process (two stage):</p>
    <ul>
<li>A temporary expander may be placed during your mastectomy to help stretch the muscle to allow for the implant to be placed behind the muscle</li> 
<li>Every few weeks, saline will be injected into the expander to stretch this area</li>
<li>Once the expander reaches the desired size, your plastic surgeon will replace it with permanent implants</li>
</ul>
                                      </AccordionItemBody>
                                  </AccordionItem>
                                  <AccordionItem>
                                      <AccordionItemTitle>
                                          <h3>Tissue reconstruction</h3>
                                      </AccordionItemTitle>
                                      <AccordionItemBody>
                                          <p>Tissue reconstruction uses skin and fat taken from the abdomen, back, thigh, or buttocks. </p>
    <ul>
<li>Tissue reconstruction requires a longer surgery and a longer recovery than implant reconstruction</li> 
<li>Because tissue reconstruction uses your own skin and tissue, the breast generally looks and feels more natural; however, the skin sensation is still not normal (remains numb)</li>
</ul>
                                      </AccordionItemBody>
                                  </AccordionItem>
                                  <AccordionItem>
                                      <AccordionItemTitle>
                                          <h3>Recovery time</h3>
                                      </AccordionItemTitle>
                                      <AccordionItemBody>
                                          <p>The recovery time for women who have immediate reconstruction is usually about 4 to 8 weeks, depending on whether reconstruction is tissue or implant based. The advantages of immediate reconstruction generally include a better cosmetic outcome and fewer follow-up procedures. In addition, women will wake up from surgery with a breast mound in place, which can help ease the emotional impact of losing a breast. </p>
     <p>A longer recovery may mean not being able to return to regular activities, including work, as soon as you could if you were having less surgery. There also might be additional limitations, such as restrictions to lifting and carrying, which may affect your daily routine in different ways, including going grocery shopping or caring for a baby or young child. </p>
                                      </AccordionItemBody>
                                  </AccordionItem>
                             
    </Accordion>
                          );
}

export default ReconstructionAccordion;
