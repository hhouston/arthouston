## arthouston
e-commerce site for KatherineHoustonArt


### Background

This website is built to display the art work by Katherine Houston. Furthermore it will incorporate the Stripe API to process orders and a backend to host the user's profile information and completed orders.

The prototype will use materials from the current [portfolio](www.katherinehoustonart.com) for seeding until the production version is released.

*Mobile first design*

### Functionality & MVP

With this extension, users will be able to:

- [ ] Sign up for an account
- [ ] View individual art work, installations, and press articles
- [ ] Purchase available pieces
- [ ] Keep track of orders

### Future features

- [ ] Email authentication
- [ ] Admin privileges (upload new content, manage purchases through portal, sending newsletter)
- [ ] Logo
- [ ] Proper hosting and domain


### Wireframes

![wireframes](images/wireframes/home-page.png)

### Technologies & Technical Challenges

This website will be implemented using Ruby on Rails and ReactJS. The database will run on PostgreSQL while the front end will utilize JavaScript, JSX, jBuilder, HTML, and SASS.

In addition to the existing technology the Stripe API will be used for payment processing.

The primary technical challenges will be:

- Secure sign up and protection of user payment information
- Tracking and processing orders to be 100% bug free for a good user experience
- Enticing UI and adequate design to impress art lovers
- Mobile first design using media queries

### Implementation Timeline

**Day 1**: Get started on the database design of the website based on credentials needed for Stripe API - Auth

- Sign Up/Login
- Completed DB Schema
- General Home Page Layout

**Day 2**: Make payment request

- Example art on splash page to test payment processing
- Successful payment transaction with Stripe API

**Day 3**: List Featured Art on Home Page with generic nav bar

- Routes: Pieces, Installations, Photos, News, Contact
- Generic nav bar (not collapsing yet)

**Day 4**: CSS for displaying content in all of the routes and media queries for collapsing nav bar

- Using media queries allow the nav bar to hide when on mobile phones
- Proper styling for Art pieces and Art detail page

**Day 5**: Admin feature: display purchases
- Allow admin to view processed orders
- Differentiate available pieces from ones that have sold
- Production README
