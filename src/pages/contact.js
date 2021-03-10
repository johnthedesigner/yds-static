import { useState } from 'react'
import Page from '../components/page'
import pages from '../pages.json'
import Hero from '../components/hero'
import Bumper from '../components/bumper'
import { CompactTextWrapper, CompactText } from '../components/compactText'

export default function Contact() {
    const [isOther, setIsOther] = useState(false)

    const checkForOther = (value) => {
        if (value === 'other') {
            setIsOther(true)
        } else {
            setIsOther(false)
        }
    }

    const TextInput = (props) => {
        return (
            <fieldset>
                <label>{props.label}</label>
                <input
                    type="text"
                    name={props.name}
                    required={props.required}
                ></input>
            </fieldset>
        )
    }

    const OtherFormField = () => {
        if (isOther) {
            return (
                <TextInput
                    label="If other, what category?"
                    name="entry.389562223"
                    required={true}
                />
            )
        } else {
            return null
        }
    }

    return (
        <Page page={pages.contact} backgroundClass="page__body--flower1">
            <Hero title="Contact Us" image="/garden.jpg" />
            <Bumper text="Want to get more involved in YDS? Get in touch, we'd love to talk about opportunities to help with meetings, newsletters, garden tours and more" />
            <CompactTextWrapper>
                <CompactText>
                    <p>
                        Lorem ipsum <a href="#">dolor</a> sit amet.
                    </p>
                </CompactText>
                <CompactText>
                    <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfRp8mGPbFhr2s0N-somQ3bcfnjGgcM_KHXwmQ_v3oT7_sYpg/formResponse">
                        <TextInput
                            label="Email Address"
                            name="entry.1132014782"
                            required={true}
                        />
                        <TextInput
                            label="Your Name"
                            name="entry.1132014782"
                            required={true}
                        />
                        <fieldset>
                            <label>What would you like to talk about?</label>
                            <select
                                onChange={(e) => checkForOther(e.target.value)}
                                value=""
                                name="entry.1748743079"
                            >
                                <option value="">Select an option</option>
                                <option value="article">
                                    Newsletter article
                                </option>
                                <option value="other">Other</option>
                            </select>
                        </fieldset>
                        <OtherFormField />
                        <TextInput
                            label="If other, what topic?"
                            name="entry.389562223"
                            required={false}
                        />
                        <textarea name="entry.84551917" />
                        <button className="button" type="submit">
                            Submit
                        </button>
                    </form>
                </CompactText>
            </CompactTextWrapper>
        </Page>
    )
}
