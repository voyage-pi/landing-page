# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# Voyage Landing Page

## Contact Form Setup

The contact form on the landing page uses EmailJS to send emails directly from the frontend. Follow these steps to set it up:

1. **Create an EmailJS Account**:
   - Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
   - Verify your email address

2. **Create an Email Service**:
   - In the EmailJS dashboard, go to "Email Services"
   - Add a new service (Gmail, Outlook, or others)
   - Follow the instructions to connect your email account

3. **Create an Email Template**:
   - Go to "Email Templates" in the dashboard
   - Create a new template
   - Use the following template variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
     - `{{to_email}}` - Recipient's email (set as voyage.pi.2025@gmail.com)

4. **Update Credentials in the Code**:
   - Open `src/app/page.tsx`
   - Replace the placeholder values with your actual EmailJS credentials:
     ```javascript
     const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Found in Email Services
     const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Found in Email Templates
     const EMAILJS_USER_ID = "YOUR_USER_ID"; // Found in Account > API Keys
     ```

5. **Initialize EmailJS**:
   - Make sure to initialize EmailJS in your application by updating the handleSubmit function in `src/app/page.tsx` to include `emailjs.init(EMAILJS_USER_ID)` before sending the email if needed.

## Additional Notes

- The free tier of EmailJS allows 200 emails per month
- For production, consider upgrading to a paid plan depending on your needs
- Always validate and sanitize user inputs to prevent misuse of your email service
