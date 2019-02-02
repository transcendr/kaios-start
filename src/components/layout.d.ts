/// <reference types="react" />
import * as PropTypes from 'prop-types';
declare const Layout: {
    ({ children, node }: any): JSX.Element;
    propTypes: {
        node: PropTypes.Requireable<object>;
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    };
};
export default Layout;
