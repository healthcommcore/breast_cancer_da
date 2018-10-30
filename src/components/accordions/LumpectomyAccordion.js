import React from 'react';
import BrcaAccordion from './BrcaAccordion';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion';

const LumpectomyAccordion = (props) => {
  return (
    <Accordion>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>Lymph node surgery </h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>A type of lymph node surgery called sentinel lymph node biopsy (SLNB) is generally done as part of lumpectomy for Stages 1, 2, and 3 breast cancer. It isn’t generally done for Stage 0 (ductal carcinoma in situ or DCIS) breast cancer.</p>
                <p>Lymph nodes are often removed during surgery to determine if cancer has spread beyond the breast. The first one or two lymph nodes that a tumor drains into are called sentinel lymph nodes.</p>
                <p>In an SLNB, the surgeon injects a blue dye or radioactive substance (or both) into the breast to identify the sentinel lymph node(s). The nodes that are stained by the dye or substance with a small amount of radiation (which helps the surgeon find the cancer during surgery using a handheld radiation-detection device) are then removed and checked for cancer cells. Depending on the results, additional lymph node surgery may be required.
                </p>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>Short- and long-term effects</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>Lumpectomy usually has a lower risk of surgical complications, such as infection and wound healing problems, compared to mastectomy and reconstruction.</p>
                <p>Some women may develop lymphedema (arm swelling) after lymph node surgery or radiation.</p>
                <p>Longer term, women who have lumpectomies often report fewer concerns about body image and sexual functioning in the years after surgery, compared to women who have mastectomies.</p>
                <p>After a lumpectomy, breastfeeding in the treated breast may or may not be possible, and breastfeeding in the healthy breast will be possible.</p>
                <p>If you have a lumpectomy, you will still need to have regular mammograms of both breasts.</p>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>Recovery time</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>While recovery from surgery is different for everyone, in general, women who have a lumpectomy with or without a sentinel lymph node biopsy:</p>
                <ul>
                    <li>Can go home the same day that they have their surgery</li>
                    <li>Do not usually require surgical drains (tubes with a bag attached to capture extra fluid from the surgical site) placed during their surgery </li>
                    <li>Can get back to their regular activities, including returning to work, after about 1 to 2 weeks.</li>
                </ul>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>Radiation</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>In most cases, women who have a lumpectomy also have a course of radiation treatment to decrease the risk of cancer returning in the breast and chest wall area.</p>
                <p>The radiation treatment usually involves 5 clinical visits each week for 3 to 6 weeks. Each treatment itself is about 10 to 20 minutes. You will not feel anything when you are getting radiation treatment. After the treatment session is over, you can continue your regular activities. It is safe to be around other people after this treatment, including children.</p>
                <p>Most women tolerate radiation treatment well and experience few side effects, but side effects are possible.</p>
                <ul>
                    <li>Common side effects include sunburn to the breast, irritation or itchiness of the breast skin from the radiation, and fatigue.</li>
                    <li>Most side effects from radiation treatment are short term.</li>
                    <li>For women who have a shorter course of radiation (called “hypofractionation”), these side effects are often lessened.</li>
                    <li>Radiation therapy after a lumpectomy sometimes affects the look or size of the treated breast. The breast may become larger due to fluid buildup or smaller due to the development of scar tissue. Any such change usually begins within a year of completing therapy, although it may last longer than that.</li>
                </ul>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>Cancer risk after lumpectomy and radiation</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>After a lumpectomy, the risk of the breast cancer returning in the treated breast and chest wall area over the next 5 years is about 3 to 5%. This means that, on average, about 3 to 5 of every 100 women who choose this treatment for their breast cancer will have their breast cancer come back in their treated breast and chest wall area.</p>
                <BrcaAccordion>
									<p>After a lumpectomy, the risk of the breast cancer returning in the treated breast over the next 5 years is about <strong>4 to 5%.</strong> This means that, on average, about <strong>4 to 5 of every 100 women</strong> who choose this treatment for their breast cancer will have their breast cancer come back in their treated breast and chest wall area. Women with a BRCA 1/2 mutation are also at higher risk for developing a new primary cancer in their treated breast over time.</p>
                </BrcaAccordion>
            </AccordionItemBody>
        </AccordionItem>
    </Accordion>
  );
}

export default LumpectomyAccordion;
