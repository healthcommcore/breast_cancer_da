import React, { Component } from 'react';
import NextButton from './NextButton';

class TreatmentComparison extends Component {
  constructor(props) {
    super(props);
    this.state = "";
  }

  render() {
    return (
      <div>
        { this.props.title !== undefined ? <h1>{ this.props.title }</h1> : "" }
        <div className="table-responsive-sm">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th className=""></th>
                        <th>Lumpectomy</th>
                        <th>Mastectomy</th>
                        <th className="">Bilateral (double) mastectomy</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Procedure</th>
                        <td className="">Removal of the tumor, keeping as much of the breast as possible</td>
                        <td>Removal of the breast with the tumor (with or without reconstruction). Bilateral mastectomy is the removal of both breasts.</td>
                        <td className="">Removal of the breast with the tumor and the healthy breast (with or without reconstruction)</td>
                    </tr>
                    <tr>
                        <th>Breast cancer risk over next 5 years</th>
                        <td className="">
                            <p>3-5% risk of cancer returning in treated breast/chest wall (BRCA1/2: 4-5% risk)</p>

                            <p>2-3% risk of cancer developing in healthy breast<br />
                                (BRCA1: 14-15% risk<br />
                                BRCA2: 4-9% risk)</p>

                            <p>The risk of cancer returning in another part of the body is the same no matter which procedure is chosen</p>
                        </td>
                        <td>
                            <p>2-4% risk of cancer returning in treated breast/chest wall (BRCA1/2: 2-4% risk)</p>
                            <p>2-3% risk of cancer developing in healthy breast<br />
                                (BRCA1: 14-15% risk<br />
                                BRCA2: 4-9% risk)</p>
                            <p>The risk of cancer returning in another part of the body is the same no matter which procedure is chosen</p>
                        </td>
                        <td className="">
                            <p>2-4% risk of cancer returning in treated breast/chest wall (BRCA1/2: 2-4%) risk</p>
                            <p>2-3% risk of cancer developing in healthy breast<br />
                                (BRCA1: 14-15% risk<br />
                                BRCA2: 4-9% risk)</p>
                            <p>The risk of cancer returning in another part of the body is the same no matter which procedure is chosen</p>
                        </td>
                    </tr>
                    <tr>
                        <th>Breastfeeding</th>
                        <td className="">Possible (both breasts)</td>
                        <td>Possible (healthy breast)</td>
                        <td className="">Not possible</td>
                    </tr>
                    <tr>
                        <th>Appearance and sensation</th>
                        <td className="">
                            <p>As much of the breast is kept as possible</p>
                            <p>Breast may be smaller, firmer, or in different position than healthy breast</p>
                            <p>Most women don’t need reconstruction</p>
                            <p>Maintain sensation in treated breast</p>
                        </td>
                        <td>
                            <p>Reconstruction or prothesis is an option for breast symmetry</p>
                            <p>Without reconstruction, breasts are not symmetrical</p>
                            <p>Permanent numbness in treated breast area</p>
                        </td>
                        <td className="">
                            <p>Reconstruction or prostheses are an option</p>
                            <p>Breast area is symmetrical</p>
                            <p>Permanent numbness in entire breast and chest wall area</p>
                        </td>

                    </tr>
                    <tr>
                        <th>Potential surgery complications/need for additional surgery</th>
                        <td className="">
                            <p>Lower chance of complications</p>
                            <p>Lymphedema risk</p>
                            <p>May need additional cancer surgery if there are not clear margins </p>
                        </td>
                        <td>
                            <p>Increased chance of complications than lumpectomy, especially when choosing reconstruction</p>
                            <p>Lymphedema risk</p>
                            <p>No need for additional cancer surgery but may need multiple procedures if choosing reconstruction</p>
                        </td>
                        <td className="">
                            <p>Increased chance of complications than unilateral mastectomy, especially when choosing reconstruction</p>
                            <p>Lymphedema risk</p>
                            <p>No need for additional cancer surgery but may need multiple procedures if choosing reconstruction</p>
                        </td>
                    </tr>
                    <tr>
                        <th>Recovery</th>
                        <td className="">
                            <p>Back home: Same day</p>
                            <p>Back to regular activities: 1-2 weeks</p>
                            <p>No drains</p>
                            <p>Radiation needed after surgery</p>
                        </td>
                        <td>
                            <p>Back home: Day after surgery</p>
                            <p>Back to regular activities: 2-3 weeks (without reconstruction)</p>
                            <p>Drains for 1-2 weeks</p>
                            <p>May not need radiation after surgery </p>
                        </td>
                        <td className="">
                            <p>Back home: Day after surgery</p>
                            <p>Back to regular activities: 4-6 weeks (without reconstruction)</p>
                            <p>Drains for 2-4 weeks</p>
                            <p>May not need radiation after surgery</p>
                        </td>
                    </tr>
                    <tr>
                        <th>Annual mammograms</th>
                        <td className="">Necessary (both breasts)</td>
                        <td>Necessary (healthy breast)</td>
                        <td className="">Not necessary</td>
                    </tr>
                </tbody>
            </table>
            { this.props.nextButton !== undefined ? <NextButton dest="worry-assessment" /> : "" }
        </div>
      </div>
    );
  }
}

export default TreatmentComparison;
