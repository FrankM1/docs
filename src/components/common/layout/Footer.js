import React from 'react'
import { Spirit } from '../../../styles/spirit-styles'
import { Link } from 'gatsby'
import { Icon, Logo } from '../.'

const listItemClass = `mb2 lh-1-65` // TODO: Probably should go to spirit-styles.js
const linkClass = `link pa2 midgrey hover-purple dib mr5 f8`

const Footer = () => (
    <footer className="pt10 pt-vw3-ns pb-vw3 bt b--whitegrey">

        <section className={`${Spirit.page.xl} grid-12`}>

            <a href="https://qazana.net/pricing" className="db col-12 col-6-ns pr2 pr20-ns pt12 pt7-ns pb7 pl2 pl30-ns relative tdn bn br-ns b--whitegrey dark-h4-hover">
                <Icon name="cloud-upload" className="absolute top-0 top-10-ns left-2 left-10-ns w10 w13-ns h-auto fill-green" />
                <h4 className={`${Spirit.h4} darkgrey`}>Ready to upgrade to the best?</h4>
                <p className={`${Spirit.small} midgrey mt1`}>
                    Spend less time running your servers and more time running your site. <strong className="purple">Qazana(Pro)</strong> has got you covered.
                </p>
            </a>

            <a href="https://forum.qazana.net/" className="db col-12 col-6-ns pr2 pr20-ns pt18 pt7-ns pb7 pl2 pl30-ns bt b--whitegrey bn-ns relative tdn dark-h4-hover">
                <Icon name="chat-double-bubble" className="absolute top-6 top-10-ns left-2 left-10-ns w10 w13-ns h-auto fill-purple" />
                <h4 className={`${Spirit.h4} darkgrey`}>Looking for help or advice?</h4>
                <p className={`${Spirit.small} midgrey mt1`}>Join the <strong>Qazana community</strong>  and meet thousands of other professional users and developers now</p>
            </a>

        </section>

        <section className={`${Spirit.page.xl} m1 mt-vw3-ns`}>

            <div className="bt b--whitegrey flex justify-between items-center pt4">
                <ul className="flex list pa0 ma0 items-center">
                    <li className={listItemClass}><a href="https://qazana.net" className="dib pt2 mr6"><Logo /></a></li>
                    <li className={`${listItemClass} dn db-l`}><Link to="/" className={linkClass}>Docs Home</Link></li>
                    <li className={`${listItemClass} dn db-l`}><a href="https://forum.qazana.net" className={linkClass}>Forum</a></li>
                    <li className={`${listItemClass} dn db-l`}><a href="https://status.qazana.net" className={linkClass}>Status</a></li>
                    <li className={`${listItemClass} dn db-l`}><a href="https://twitter.com/qazana" className={linkClass}>@Qazana</a></li>
                </ul>

                <ul className="flex list pa0 ma0 items-center">
                    <li className={listItemClass}><a href="https://qazana.net" className="link pa2 midgrey hover-purple dib mr0">Qazana.net</a></li>
                </ul>
            </div>

        </section>
    </footer>
)

export default Footer
