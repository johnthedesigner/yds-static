import { useState } from 'react'
import Link from 'next/link'

import Page from '../components/page'
import pages from '../pages.json'
import Hero from '../components/hero'
import Bumper from '../components/bumper'
import { CompactTextWrapper, CompactText } from '../components/compactText'
import IconFB from '../public/icon-fb.svg'
import IconIG from '../public/icon-ig.svg'

export default function Contact() {
    const [topic, setTopic] = useState('')
    // const [isOther, setIsOther] = useState(false)

    const isOther = () => {
        return topic === 'other'
    }

    const RequiredMark = () => {
        return <b className="required-mark">*</b>
    }

    const TextInput = (props) => {
        let MaybeRequiredMark = (props) => {
            if (props.required) {
                return <RequiredMark />
            } else {
                return null
            }
        }

        return (
            <fieldset>
                <label>
                    {props.label}
                    <MaybeRequiredMark required="props.required" />
                </label>
                <input
                    type="text"
                    name={props.name}
                    required={props.required}
                ></input>
            </fieldset>
        )
    }

    const OtherFormField = () => {
        if (isOther()) {
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
            <CompactTextWrapper>
                <CompactText>
                    <h3>Want to get more involved in YDS?</h3>
                    <p>
                        Get in touch, we'd love to talk about opportunities to
                        help with meetings, newsletters, garden tours and more
                    </p>
                    <Link href="http://instagram.com/yankeedahliasociety">
                        <a
                            className="footer__social-icon"
                            title="Yankee Dahlia Society on Instagram"
                            target="_blank"
                        >
                            <IconIG />
                        </a>
                    </Link>
                    <Link href="http://facebook.com/yankeedahliasociety">
                        <a
                            className="footer__social-icon"
                            title="Yankee Dahlia Society on Facebook"
                            target="_blank"
                        >
                            <IconFB />
                        </a>
                    </Link>
                </CompactText>
                <CompactText>
                    <h3>Contact form</h3>
                    <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeHRwqdeRYp6EOO4SEQpKQTHIYFwxb81mQi6HkLtPTp5RTUBw/formResponse">
                        <TextInput
                            label="Email Address"
                            name="entry.1132014782"
                            required={true}
                        />
                        <TextInput
                            label="Your Name"
                            name="entry.605890569"
                            required={true}
                        />
                        <fieldset>
                            <label>What are you contacting us about?</label>
                            <select
                                onChange={(e) => setTopic(e.target.value)}
                                value={topic}
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
                        <fieldset>
                            <label>Your message</label>
                            <textarea name="entry.84551917" />
                        </fieldset>
                        <button className="button" type="submit">
                            Submit
                        </button>
                    </form>
                    <p>
                        <em className="required-footnote">* Required field</em>
                    </p>
                </CompactText>
            </CompactTextWrapper>
        </Page>
    )
}
