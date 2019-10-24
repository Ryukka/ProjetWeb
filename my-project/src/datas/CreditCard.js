import React, {Component} from 'react';
import '/home/marphi/PW/ProjetWeb/my-project/src/credit-card.css';


class CreditCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
      render(props) {
          return (
                <div className='credit-card'>

                    <div className='credit-card_logo'>{this.props.logo}</div>

                    <div className='credit-car_number'>{this.props.number}</div>

                    <div className='credit-card_info'>
                        <div className='credit-card_info_name'>
                            <div className='credit-card_info_label'>CARDHOLDER'S NAME</div>
                            <div>{this.props.name}</div>
                        </div>

                        <div className='credit-card_info_expiry'>
                            <div className='credit-card_info_label'>VALID UP TO</div>
                            <div>{this.props.expiry}</div>
                        </div>
                    </div>
                </div>
            
          )
      }
}

export default CreditCard;
