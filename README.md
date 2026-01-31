# glowing-doodle
Liquid, HTML, CSS, and JavaScript for Simple Submission Forms on Shopify

This set of code allows you to create a simple custom user submission form to request further information from your website without modifying any of your site/theme source code. Shopify's default submission form is rather lackluster, and apps to do this same thing are pricey, especially if you don't get a lot of submissions. Here's a way around that.

To use this code set, navigate to the visual drag-and-drop site editor. Navigate to the page you want to add the form to. Add an element, and when prompted, choose "Custom Liquid" section. This will open a frame that has an area for you to input custom Liquid code and custom CSS code.

Copy/paste the Liquid code into the "Custom Liquid" input box at the top of the frame. Then, copy/paste the JS into the same custom code field. Be sure that the JS is contained within the endform tag. The JS file sets up a listener to trigger Shopify Flow to send an email to the designated account contact email; the form may not work properly without this listener.

After the Liquid and JS are in the top code editor, scroll down to the "Custom CSS" input box. Copy/paste the formcss CSS file; this CSS formatting controls the layout, alignment, and spacing of the form. The form will work without this CSS, but it will be ugly. This makes the form look nice.

Screenshot of Custom Liquid frame for assistance.

<img width="291" height="858" alt="Screenshot_20260131_113816" src="https://github.com/user-attachments/assets/50e47a70-f9db-496b-b0aa-568d17d2f457" />
