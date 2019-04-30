import React from 'react';
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
                    <h3>Short- and long-term effects</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>Lumpectomy has a lower risk of surgical complications, such as infection and wound healing problems, compared to mastectomy and reconstruction.</p>
                    <p>Longer term, women who have lumpectomies often report fewer concerns about body image and sexual functioning in the years after surgery, compared to women who have mastectomies.</p>
                    <p>After a lumpectomy, breastfeeding in the treated breast may or may not be possible; breastfeeding in the other breast will be possible.</p>
                    <p>If you have a lumpectomy, you will still need to have regular mammograms of both breasts.</p>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <h3>Appearance and sensation </h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>Most women will still have sensation in their treated breast and nipple area after lumpectomy, but this may depend on how much tissue was removed or the location of the tumor. There will likely be numbness along the surgical scar(s).</p>
                    <p>For most women, lumpectomy has a good cosmetic result. The final appearance of your breast will be determined by your natural breast size, how much tissue was removed during surgery, and radiation. Because tissue is removed, the breast may be smaller and firmer. The larger the portion of breast removed, the more likely it is that you will see a change in the shape of the breast afterward. Removing a large tumor from a large breast may not change its appearance much, but removing even a small tumor from a small breast may cause a more noticeable change. Your breast may also be in a different position after surgery compared to the other breast. Most women do not need reconstruction or corrective surgery after a lumpectomy.</p>
                    <p>After your breast and lymph node surgery, you may feel scar tissue along your incision site that feels hard. This is common and will soften over the next several months. </p>
                    <p>You will have a scar and may have bulging or dimpling where the tumor was removed. The surgical scar will likely fade over time. In many cases, lumpectomy causes very little scarring or changes to the breast.
                    </p>
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
                    <h3>Cancer risk after lumpectomy and radiation</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>After a lumpectomy, the risk of the breast cancer returning in the <strong>treated</strong> breast and chest wall area over the next 5 years is about <strong>3 to 5%.</strong> This means that, on average, about <strong>3 to 5 of every 100</strong> women who choose this treatment for their breast cancer will have their breast cancer come back in their treated breast and chest wall area.</p>
                    
                    <p>After a lumpectomy, the risk of the breast cancer developing in the <strong>unaffected (other)</strong> breast in the next 5 years is about <strong>2 to 3%.</strong> This means that, on average, about <strong>2 to 3 of every 100 women</strong> who choose this treatment for their breast cancer will develop cancer in their other breast. <strong>This 2 to 3% risk of breast cancer developing in the other breast is the same whether a woman has a lumpectomy or mastectomy.</strong></p>
                    
                    <p>The risk of cancer coming back in another part of the body is the same whether you have a lumpectomy or a mastectomy.</p>
    
    <p><strong>Genetics and cancer risk</strong><br />
There are genetic changes (mutations) that may increase your risk of developing a second breast cancer in the future. If you test positive for one of these mutations, your lifetime risk of developing a new breast cancer can be much higher compared to someone who tests negative for a mutation. This risk will depend on the type of mutation you have. If you test positive for one of these mutations, your doctor or a genetic counselor will discuss these risks with you and help you decide what treatment is right for you.</p>

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
                        <li>For women who have a shorter course of radiation (called "hypofractionation"), these side effects are often lessened.</li>
                        <li>Radiation therapy after a lumpectomy sometimes affects the look or size of the treated breast. The breast may become larger due to fluid buildup or smaller due to the development of scar tissue. Any such change usually begins within a year of completing therapy, although it may last longer than that.</li>
                    </ul>
                </AccordionItemBody>
            </AccordionItem>

            
        </Accordion>
    );
}

export default LumpectomyAccordion;
