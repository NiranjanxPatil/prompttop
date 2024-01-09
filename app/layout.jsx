import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Particles from "@components/particles";
import { AppFooter } from "@components/Footer";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};
<script src="https://beamanalytics.b-cdn.net/beam.min.js" 
data-token="cea78beb-0056-47f4-8382-00f1ed721ce1" a
sync></script>
const RootLayout = ({ children }) => (
  <html lang='en'>
      <script
        src="https://beamanalytics.b-cdn.net/beam.min.js"
        data-token="cea78beb-0056-47f4-8382-00f1ed721ce1"
        async
      />
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
          <Nav />
          {children}
          <AppFooter />
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
