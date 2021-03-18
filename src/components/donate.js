import { useState } from 'react'

export default function Contact() {
    const [donation, setDonation] = useState(25)

    const getItemName = () => {
        return `Form: Footer Donate Form, Donation Amount: ${donation}`
    }

    return (
        <div>
            <h3>Donate to Yankee Dahlia Society</h3>
            <p>
                Help us continue to produce fun, engaging programs, talks and
                dahlia events.
            </p>

            <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
                <input type="hidden" name="cmd" value="_xclick" />
                <input type="hidden" name="currency_code" value="USD" />
                <input
                    type="hidden"
                    name="business"
                    value="info@yankeedahliasociety.com"
                />

                <input type="hidden" name="item_name" value={getItemName()} />

                <input type="hidden" name="amount" value={donation} />

                <label htmlFor="donation_amount">Donation Amount</label>
                <div className="donation-form__field-wrapper">
                    <input
                        className="donation-form__amount-input"
                        id="donation_amount"
                        type="text"
                        value={donation}
                        onChange={(e) => setDonation(1 * e.target.value)}
                        required
                    />
                    <button
                        className="button donation-form__submit-button"
                        type="submit"
                    >
                        Donate
                    </button>
                </div>
            </form>
        </div>
    )
}
