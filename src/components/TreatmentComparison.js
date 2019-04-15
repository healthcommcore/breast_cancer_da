import React, { Component } from 'react';
import NextButton from './NextButton';
import { exists } from '../helpers/utilities';

class TreatmentComparison extends Component {
  constructor(props) {
    super(props);
    this.toggleBilateral = this.toggleBilateral.bind(this);
    this.state = {
      show_bilateral: exists(this.props.showBilateral)
    }
  }

  toggleBilateral = (e) => {
    e.preventDefault();
    const toggle = !this.state.show_bilateral;
    this.setState({ show_bilateral : toggle })
  }

  render() {
    return (
      <div>
        { this.props.title !== undefined ? <h1>{ this.props.title }</h1> : "" }
        <div className="table-responsive-sm">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className=""></th>
                        <th>Lumpectomy</th>
                        <th>Mastectomy</th>
                        <th className={ this.state.show_bilateral ? "d-block" : "d-none" } >Bilateral (double) mastectomy</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Procedure</th>
                        <td className="">Removal of the tumor, keeping as much of the breast as possible</td>
                        <td>Removal of the breast with the tumor (with or without reconstruction). <a href="#" onClick={ this.toggleBilateral }>Bilateral mastectomy</a> is the removal of both breasts</td>
                        <td className={ this.state.show_bilateral ? "d-block" : "d-none" }>Removal of the breast with the tumor and the other breast (with or without reconstruction)</td>
                    </tr>
                    <tr>
                        <th>Breast cancer risk over next 5 years</th>
                        <td className="">
                            <p>3-5% risk of cancer returning in <strong>treated</strong> breast/chest wall </p>

                            <p>2-3% risk of cancer developing in <strong>other</strong> breast
                                </p>

                            <p>The risk of cancer returning in another part of the body is the same no matter which procedure is chosen</p>
                        </td>
                        <td>
                            <p>2-4% risk of cancer returning in <strong>treated</strong> breast/chest wall </p>
                            <p>2-3% risk of cancer developing in <strong>other</strong> breast</p>
                            <p>The risk of cancer returning in another part of the body is the same no matter which procedure is chosen</p>
                        </td>
                        <td className={ this.state.show_bilateral ? "d-block" : "d-none" }>
                            <p>2-4% risk of cancer returning in <strong>treated</strong> breast/chest wall </p>
                            <p>2-3% risk of cancer developing in <strong>other</strong> breast</p>
                            <p>The risk of cancer returning in another part of the body is the same no matter which procedure is chosen</p>
                        </td>
                    </tr>
                    <tr>
                        <th>Breastfeeding</th>
                        <td className="">Possible (both breasts)</td>
                        <td>Possible (<strong>other</strong> breast)</td>
                        <td className={ this.state.show_bilateral ? "d-block" : "d-none" }>Not possible</td>
                    </tr>
                    <tr>
                        <th>Appearance and sensation</th>
                        <td className="">
                            <p>As much of the breast is kept as possible</p>
                            <p>Maintain sensation in treated breast</p>
                                      <p>Cosmetic outcome is usually good. Possibility breast may be smaller, firmer, or in different position than other breast</p>
                            
                        </td>
                        <td>
                            <p>Reconstruction or prothesis is an option for breast symmetry</p>
                            <p>Permanent numbness in treated breast area</p>
                                      <p>Without reconstruction, breasts are not symmetrical</p>
                            
                        </td>
                        <td className={ this.state.show_bilateral ? "d-block" : "d-none" }>
                            <p>Reconstruction or prostheses are an option</p>
                            <p>Permanent numbness in entire breast and chest wall area</p>
                                      <p>Breast area is symmetrical</p>
                            
                        </td>

                    </tr>
                    <tr>
                        <th>Potential surgery complications/need for additional surgery</th>
                        <td className="">
                            <p>Lower chance of complications</p>
                            
                            <p>If there aren't "clear margins," may need additional cancer surgery  </p>
                        </td>
                        <td>
                            <p>Increased chance of complications than lumpectomy, especially when choosing reconstruction</p>
                            
                            <p>No need for additional cancer surgery but may need multiple procedures if choosing reconstruction</p>
                        </td>
                        <td className={ this.state.show_bilateral ? "d-block" : "d-none" }>
                            <p>Increased chance of complications than unilateral mastectomy, especially when choosing reconstruction</p>
                            
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
                            <p>Back home: Day after surgery, longer with reconstruction</p>
                            <p>Back to regular activities: 2-3 weeks (<strong>without</strong> reconstruction), longer with reconstruction</p>
                            <p>Drains for 1-2 weeks</p>
                            <p>May or may not need radiation after surgery </p>
                        </td>
                        <td className={ this.state.show_bilateral ? "d-block" : "d-none" }>
                            <p>Back home: Day after surgery, longer with reconstruction</p>
                            <p>Back to regular activities: 4-6 weeks (<strong>without</strong> reconstruction), longer with reconstruction</p>
                            <p>Drains for 1-2 weeks</p>
                            <p>May or may not need radiation after surgery</p>
                        </td>
                    </tr>
                    <tr>
                        <th>Annual mammograms</th>
                        <td className="">Necessary (both breasts)</td>
                        <td>Necessary (other breast)</td>
                        <td className={ this.state.show_bilateral ? "d-block" : "d-none" }>Not necessary</td>
                    </tr>
                </tbody>
            </table>
            { this.props.nextButton !== undefined ? <NextButton dest="values-clarification" /> : "" }
        </div>
      </div>
    );
  }
}

export default TreatmentComparison;
