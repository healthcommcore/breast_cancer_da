import React, { useEffect } from "react";
import store from "store";
import TreatmentComparison from "./TreatmentComparison";
import { animateScroll } from "react-scroll";
import ValuesResponse from "./ValuesResponse";
import values_content from "../helpers/values_content.json";
import worry_content from "../helpers/worry_content.json";
import next_steps_content from "../helpers/next_steps_content.json";
import { exists, toInt } from "../helpers/utilities";

const Summary = (props) => {
  const values_resp = props.data.values || "";
  const worry_resp = props.data.worry || "";
  const next_resp = props.data.next || "";
  const user = store.get("user");

  useEffect( () => {
    animateScroll.scrollToTop({ duration: 100 });
  });

  return (
    <div>
      <h1>Your summary</h1>
      <div className="summary-spacer">
        <h2>Treatment comparison</h2>
        <TreatmentComparison />
      </div>
      <div className="summary-spacer">
        <h2>What is important to you?</h2>
        <ol>
          { values_content.map( (entry, i) => {
            return (
              <li key={i}>
                <p>{ entry.content }</p>
{/* IIFE to display user's value response if there is one and if not, display a no answer given message */}
                  { (() => {
                    if(values_resp[entry.value]) {
                      return (
                        <div>
                          <p><em>On a scale of 0 (Not at all important) to 10 (Extremely important), you ranked this as</em> <strong> { values_resp[entry.value] }.</strong></p>
                          <ValuesResponse responseClass={ values_resp[entry.value] >= 6 ? "value-response show-response" : "value-response" }>
                            { user.lump ? entry.response.lump : entry.response.mast }
                          </ValuesResponse>
                        </div>
                      );
                    }
                    else {
                      return <p><em>This question was not answered</em></p>;
                    }
                  })()}
              </li>
            );
          })}
        </ol>
      </div>
      <div className="summary-spacer">
        <h2>Next steps</h2>
        <p>The treatment you are leaning toward:<br />
        <strong>
        { isNaN( toInt(next_resp.what_treatment) ) ? next_resp.what_treatment : 
          next_steps_content.primary[0].choices[toInt(next_resp.what_treatment)]
        }
        </strong></p>
        <p>How ready you are to make a decision:<br />
        <strong>{ next_steps_content.primary[1].choices[toInt(next_resp.how_ready)] }</strong></p>
        { 
          ( () => {
            if ( exists(next_resp.what_would) && next_resp.what_would.length > 0) { 
              console.log(next_resp.what_would);
              return (
                <div>
                </div>
              );
            }
          })()
        }
        {/*
        */}
      </div>
      <button className="btn btn-lg btn-primary" onClick={ window.print }>Print your summary</button>
    </div>
  )
}

export default Summary;
