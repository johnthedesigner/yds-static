const events = [
    {
        date: '20210411',
        time: '11:00 am – 1:00 pm',
        name: 'Talking Dahlias with Paula from Garden Bee Flower Farm',
        description: () => {
            return (
                <span>
                    <p>
                        Y.D.S is thrilled to have Paula Fisher from{' '}
                        <a
                            href="#"
                            target="_blank"
                            title="Garden Bee Flower Farm Website"
                        >
                            {' '}
                            Garden Bee Flower Farm
                        </a>
                        , located in the Piedmont Triad of North Carolina.
                        Paula’s background includes volunteering as a master
                        gardener since 2015. Her flower farming started six
                        years ago with four 100-foot beds on her newly purchased
                        property. After attending a flower farming workshop she
                        jumped right into the role and since then her business
                        has expanded to 10 times that original bed space.
                    </p>
                    <p>
                        Dahlias have taken the lead in what Paula really loves
                        to grow and that has motivated her to grow over 200
                        varieties. The farm encompasses one acre of seasonal
                        flowers and dahlias and produces 500-1000 dahlias weekly
                        to a large floral industry wholesaler. She enjoys taking
                        notes on the varieties she grows to evaluate which ones
                        grow well in hot humid conditions.
                    </p>
                    <p>
                        Paula is also a member of the American Dahlia Society
                        and her local chapter, Carolinas Dahlia Society in NC.
                        She awaits the day for shows to resume and looks forward
                        to showing dahlias. Paula will take us through her
                        journey as a flower farmer, dahlia grower and enthusiast
                        sharing a seasonal overview, some background behind the
                        business and tips about growing dahlias from seed,
                        cuttings and tubers. You don’t want to miss this
                        opportunity to meet with Paula and join us for our first
                        club meeting.
                    </p>
                    <p>
                        (Please log in at 10:45 to say hello and get settled.
                        Meeting will start promptly at 11:00am)
                    </p>
                </span>
            )
        },
        location: () => {
            return (
                <span>
                    Virtual Meeting (Zoom meeting info will be emailed to
                    members)
                </span>
            )
        },
    },
    {
        date: '20210516',
        time: '11:00 am – 1:00 pm',
        name: 'Dahlia Questions & Conversation',
        description: () => {
            return (
                <span>
                    <p>
                        Whether you are an experienced dahlia grower or are new
                        to growing dahlias, there will always be something new
                        to learn. Everyone has questions about dahlias, and we
                        invite you to come and share yours! As a club, together
                        we all have decades of collective experience to draw on
                        to help every one of us learn more about our favorite
                        flower and have fun doing it! For those that are newer
                        to growing please bring your questions, for those that
                        have more experience please join us to help each other.
                    </p>
                    <p>
                        In preparation, please send in your pictures with your
                        questions so we can share images and help answer
                        questions during the meeting. Experienced dahlia
                        growers, please send in your dahlia tips and pictures of
                        your current dahlia growing update as we would love to
                        share.
                    </p>
                    <p>
                        Email
                        <a
                            href="mailto:info@yankeedahliasociety.com"
                            target="_blank"
                        >
                            info@yankeedahliasociety.com
                        </a>
                        <br />
                        Subject: Dahlia Questions or Dahlia Tip
                    </p>
                    <p>
                        (Please log in at 10:45 to say hello and get settled.
                        Meeting will start promptly at 11:00am)
                    </p>
                </span>
            )
        },
        location: () => {
            return (
                <span>
                    Virtual Meeting (Zoom meeting info will be emailed to
                    members)
                </span>
            )
        },
    },
    {
        date: '20210627',
        time: '3:00 pm – 5:00 pm',
        name: 'Dahlias; Diseases & Pests',
        description: () => {
            return (
                <p>
                    While we can’t eliminate pests and diseases from our
                    gardens, we can take steps to limit the damage they can
                    cause. What should you look for and then what can you do?
                    Beginners, come and learn what you can do to help your
                    dahlias stay healthy, happy and beautiful. Experienced
                    growers, share your successes, tips and strategies you’ve
                    learned in your own gardens. Together we can win the battle
                    of the bugs and grow healthy and happy dahlias!
                </p>
            )
        },
        location: () => {
            return 'Zoom, details to come'
        },
    },
    {
        date: '20210718',
        time: '10:00 am – 1:00 pm',
        name: 'Come Celebrate our First In-person Club Meeting',
        description: () => {
            return (
                <span>
                    <p>
                        Join Y.D.S. at Maplebrook Farmstead, one of our growing
                        partners
                    </p>
                    <p>
                        Our very first in-person meeting is rescheduled for
                        Sunday, July 18th at Maplebrook Farmstead in Sterling,
                        MA. Rain or Shine. We will have a large tent to gather
                        under for shade or in case of rainy weather.
                    </p>
                    <p>
                        It should be a nice summer afternoon for our first ever
                        in-person club meeting! Bring your dahlia enthusiasm and
                        join us for some fun at the farm. Joel Betts,
                        Conservation Planner with Worcester County Conservation
                        District, will be with us to demonstrate soil sampling
                        and answer all your soil questions. Vijaya (Vee) Maclean
                        from Best Buds Worm Castings will talk about soil
                        nutrition and biology, and will have her soil amendment
                        products available for purchase. We will give
                        demonstrations of planting tubers, staking plants,
                        taking cuttings, dividing, pinching, and sharing tips to
                        make your growing season a success. Bring chairs and a
                        picnic lunch, and see the farm as we kick off the
                        growing season and meet our growing partners and
                        members. We will come back in October to see what the
                        farm looks like in full bloom.
                    </p>
                    <p>
                        Maplebrook Farmstead farm stand will be open and have
                        goodies and aged manure for purchase. For aged manure,
                        $5/Bucket, BYO bucket & fill your own bucket.
                    </p>
                </span>
            )
        },
        location: () => {
            return 'Maplebrook Farmstead, 155 Tuttle Road, Sterling, MA 01564'
        },
    },
    {
        date: '20210829',
        time: 'TBD',
        name: 'Garden Walk, Potluck BBQ & Reading the ADS Classification Book',
        description: () => {
            return null
        },
        location: () => {
            return 'Misty Florez’s Garden, Woburn, MA'
        },
    },
    {
        date: '20210919',
        time: '10:00am - 12:00pm',
        name: 'Garden Tour hosted by Robin Sears of Robin’s Nest Designs',
        description: () => {
            return (
                <span>
                    <p>
                        Coffee, Scones, Garden Tour & Floral Arrangement
                        Demonstration hosted by Robin Sears of{' '}
                        <a href="https://www.robinsears.com/" target="_blank">
                            Robin’s Nest Designs
                        </a>
                        . Bring your folding chair.
                    </p>
                    <span>
                        <b>Rain Dates:</b>
                    </span>
                    <p>
                        If needed our plan b will be a virtual meeting and a
                        Zoom link will be sent out via email to notify members.
                    </p>
                </span>
            )
        },
        location: () => {
            return (
                <p>
                    Garden of Y.D.S. Member Robin Sears, South Hamilton, MA
                    (Address emailed to Y.D.S. Members)
                </p>
            )
        },
    },
    {
        date: '20211003',
        time: 'TBD',
        name: 'Come see the dahlias in bloom at Maplebrook Farmstead',
        description: () => {
            return null
        },
        location: () => {
            return (
                <p>Maplebrook Farmstead, 155 Tuttle Road, Sterling, MA 01564</p>
            )
        },
    },
]

export default events
