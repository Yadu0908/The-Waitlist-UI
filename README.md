# Internal Tools Access - Waitlist UI

This is a waitlist page built with Next.js (App Router) and Tailwind CSS. The goal was to build a specific UI with strict validation logic without using a backend.

**Live Site:** [[Link for the live page](https://the-waitlist-ui-vert.vercel.app/)]

## How I Solved the Requirements

I built this using React state (`useState`) to handle everything on the frontend.

**1. Blocking Gmail and Generic Emails**
Instead of just checking if the email was valid, I created a list (array) of blocked domains like `gmail.com` and `yahoo.com`.
When the user types their email, I split the string at the `@` symbol to get the domain part. Then, I check if that domain exists in my blocked list. If it does, I show the "Business emails only" error.

**2. The Reason Field Validation**
I didn't use the HTML `minlength` attribute. Instead, I tracked the length of the text in the state. If the length is less than 20 characters when the user clicks submit, I show an error message. I also added a small counter in the corner so the user knows how many characters they have typed.

**3. Success State**
I used a simple boolean state called `isSuccess`. Initially, it is false. Once all the checks pass (email is business, reason is long enough), I set it to true, which hides the form and shows the "Added to queue" message.

## One Problem I Faced

I ran into an issue with TypeScript errors when trying to handle the form submission. I kept getting an error saying `Parameter 'e' implicitly has an 'any' type`.

I didn't know how to fix it at first because I am new to TypeScript. I learned that I needed to specifically tell React what kind of event it was. I fixed it by adding `: React.FormEvent` to the submit handler function.

---

## How to Start the Project

If you want to run this code on your local machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/waitlist-ui.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Go to [http://localhost:3000](http://localhost:3000) to see the page.