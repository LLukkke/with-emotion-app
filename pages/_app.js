import { globalStyles } from "../shared/styles";

import "tailwindcss/tailwind.css";

const App = ({ Component, pageProps }) => (
  <>
    {globalStyles}
    <Component {...pageProps} />
  </>
);

export default App;
