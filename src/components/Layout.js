import { propTypes } from 'react-bootstrap/esm/Image';
import Header from './Header';
import Footer from './Footer';

function Layout({ children, title, pathname }) {
  return (
    <>
      <Header title={ title } pathname={ pathname } />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;

Layout.propTypes = {
  children: propTypes.node,
}.isRequired;
