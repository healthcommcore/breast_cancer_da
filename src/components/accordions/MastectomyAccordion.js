import React from 'react';
import BrcaAccordion from './BrcaAccordion';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion';

const MastectomyAccordion = (props) => {
    return (
      <Accordion>
          <AccordionItem>
              <AccordionItemTitle>
                  <h3>Lymph node surgery</h3>
              </AccordionItemTitle>
              <AccordionItemBody>
                  <p></p>
              </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
              <AccordionItemTitle>
                  <h3>Short- and long-term effects</h3>
              </AccordionItemTitle>
              <AccordionItemBody>
                  <p></p>
              </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
              <AccordionItemTitle>
                  <h3>Recovery time</h3>
              </AccordionItemTitle>
              <AccordionItemBody>
                  <p></p>
              </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
              <AccordionItemTitle>
                  <h3>Radiation</h3>
              </AccordionItemTitle>
              <AccordionItemBody>
                  <p></p>
              </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
              <AccordionItemTitle>
                  <h3>Cancer risk after mastectomy</h3>
              </AccordionItemTitle>
              <AccordionItemBody>
                  <p></p>
                  <BrcaAccordion>
                      <p></p>
                  </BrcaAccordion>
                  <p></p>
                  <BrcaAccordion>
                      <p></p>
                  </BrcaAccordion>
                  <p></p>
              </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
              <AccordionItemTitle>
                  <h3>Appearance and sensation</h3>
              </AccordionItemTitle>
              <AccordionItemBody>
                  <p></p>
              </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
              <AccordionItemTitle>
                  <h3>Bilateral mastectomy</h3>
              </AccordionItemTitle>
              <AccordionItemBody>
                  <Accordion>
                      <AccordionItem>
                          <AccordionItemTitle>
                              <h3>Short- and long-term effects</h3>
                          </AccordionItemTitle>
                          <AccordionItemBody>
                              <p></p>
                          </AccordionItemBody>
                      </AccordionItem>
                      <AccordionItem>
                          <AccordionItemTitle>
                              <h3>Recovery time</h3>
                          </AccordionItemTitle>
                          <AccordionItemBody>
                              <p></p>
                          </AccordionItemBody>
                      </AccordionItem>
                      <AccordionItem>
                          <AccordionItemTitle>
                              <h3>Cancer risk after bilateral mastectomy</h3>
                          </AccordionItemTitle>
                          <AccordionItemBody>
                              <BrcaAccordion>
                                  <p></p>
                              </BrcaAccordion>
                          </AccordionItemBody>
                      </AccordionItem>
                      <AccordionItem>
                          <AccordionItemTitle>
                              <h3>Appearance and sensation</h3>
                          </AccordionItemTitle>
                          <AccordionItemBody>
                              <p></p>
                          </AccordionItemBody>
                      </AccordionItem>
                      <AccordionItem>
                          <AccordionItemTitle>
                              <h3>Reconstruction</h3>
                          </AccordionItemTitle>
                          <AccordionItemBody>
                              <Accordion>
                                  <AccordionItem>
                                      <AccordionItemTitle>
                                          <h3>Two-stage or single-stage implant reconstruction</h3>
                                      </AccordionItemTitle>
                                      <AccordionItemBody>
                                          <p></p>
                                      </AccordionItemBody>
                                  </AccordionItem>
                                  <AccordionItem>
                                      <AccordionItemTitle>
                                          <h3>Tissue reconstruction</h3>
                                      </AccordionItemTitle>
                                      <AccordionItemBody>
                                          <p></p>
                                      </AccordionItemBody>
                                  </AccordionItem>
                                  <AccordionItem>
                                      <AccordionItemTitle>
                                          <h3>Recovery time</h3>
                                      </AccordionItemTitle>
                                      <AccordionItemBody>
                                          <p></p>
                                      </AccordionItemBody>
                                  </AccordionItem>
                              </Accordion>
                          </AccordionItemBody>
                      </AccordionItem>
                  </Accordion>
              </AccordionItemBody>
          </AccordionItem>
      </Accordion>
    );
}

export default MastectomyAccordion;
