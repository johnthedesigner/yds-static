import { useState } from 'react'
import Page from '../../components/page'
import pages from '../../pages.json'
import Hero from '../../components/hero'
import { CompactTextWrapper, CompactText } from '../../components/compactText'

export default function Contact() {
    // const [base, setBase] = useState(44)
    const [membershipType, setMembershipType] = useState('individual')
    const [donation, setDonation] = useState(25)
    const [includeDonation, setIncludeDonation] = useState(false)

    const baseRates = {
        business: 75,
        individual: 40,
    }
    const getBase = () => {
        return baseRates[membershipType]
    }

    const getItemName = () => {
        let itemName = `Membership Type: ${membershipType}, Donation Included: ${includeDonation}`
        if (includeDonation) {
            itemName += `, Donation Amount: ${donation}`
        }
        return itemName
    }

    const getMembershipText = () => {
        if (membershipType == 'individual') {
            return <p>If</p>
        }
    }

    const dollarize = (value) => `$${value}.00`

    const Tally = (props) => {
        return <div className="tally">{props.children}</div>
    }

    const TallyItem = (props) => {
        let figureStyles = {
            textDecoration: props.strikethrough ? 'line-through' : 'none',
            opacity: props.strikethrough ? 0.5 : 1,
        }

        return (
            <p className="tally__item">
                {props.name}:{' '}
                <span className="tally__figure" style={figureStyles}>
                    {props.amount}
                </span>
            </p>
        )
    }

    const TallyTotal = (props) => {
        return (
            <p className="tally__total">
                Total: <span className="tally__figure">{props.amount}</span>
            </p>
        )
    }

    return (
        <Page page={pages.contact} backgroundClass="page__body--flower1">
            <Hero title="Join Yankee Dahlia Society" image="/flowers.jpg" />
            <CompactTextWrapper>
                <CompactText>
                    <h3>WE WANT YOU for Yankee Dahlia Society!</h3>
                    <p>
                        It’s always a good time to join. Sign up today and have
                        an extended membership for 2021. Start receiving emails
                        and join us as we launch. Our annual membership runs
                        from August 1 through July 31, but we are including the
                        first few months as we get started. In the meantime, we
                        invite everyone to participate.
                    </p>
                </CompactText>
                <CompactText>
                    <fieldset>
                        <label>Select Membership Type</label>
                        <select
                            name="membership_type"
                            onChange={(e) => {
                                setMembershipType(e.target.value)
                            }}
                        >
                            <option value="individual">
                                Individual Membership – $40.00
                            </option>
                            <option value="business">
                                Business Membership – $75.00
                            </option>
                        </select>
                    </fieldset>
                    <p>
                        If you are the owner or representative of a dahlia or
                        home gardening business, you must choose a business
                        membership.
                    </p>
                    <hr className="form-divider" />
                    <fieldset>
                        <p>
                            Help us hit the ground running with an extra
                            donation. We appreciate anything else you can give.
                            Founder's circle donations of $25 or more will
                            receive a special gift of appreciation.
                        </p>
                        <input
                            type="checkbox"
                            value={includeDonation}
                            onChange={() =>
                                setIncludeDonation(!includeDonation)
                            }
                        />
                        <label className="inline-label">
                            Include donation?
                        </label>
                        <label>Donation Amount</label>
                        <input
                            type="text"
                            value={donation}
                            onChange={(e) => setDonation(1 * e.target.value)}
                            disabled={!includeDonation}
                        />
                    </fieldset>
                    <Tally>
                        <TallyItem
                            name="Base Rate"
                            amount={dollarize(getBase())}
                        />
                        <TallyItem
                            name="Optional Donation"
                            strikethrough={!includeDonation}
                            amount={dollarize(donation)}
                        />
                        <TallyTotal
                            amount={dollarize(
                                includeDonation
                                    ? donation + getBase()
                                    : getBase()
                            )}
                        />
                    </Tally>
                    <form
                        action="https://www.paypal.com/cgi-bin/webscr"
                        method="post"
                    >
                        <input type="hidden" name="cmd" value="_xclick" />
                        <input type="hidden" name="currency_code" value="USD" />
                        <input
                            type="hidden"
                            name="business"
                            value="info@yankeedahliasociety.com"
                        />

                        <input
                            type="hidden"
                            name="membership-type"
                            value={membershipType}
                        />
                        <input
                            type="hidden"
                            name="donation"
                            value={includeDonation ? donation : 0}
                        />

                        <input
                            type="hidden"
                            name="item_name"
                            value={getItemName()}
                        />

                        <input
                            type="hidden"
                            name="amount"
                            value={
                                includeDonation
                                    ? donation + getBase()
                                    : getBase()
                            }
                        />

                        <button className="button" type="submit">
                            Purchase Membership
                        </button>
                    </form>
                </CompactText>
            </CompactTextWrapper>
        </Page>
    )
}
