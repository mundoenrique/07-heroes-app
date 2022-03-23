// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

// Para realizar pruebas es necesario hacer la instación de los siguientes paquetes
// como dependencias de desarrollo
// "enzyme @wojtekmaj/enzyme-adapter-react-17 enzyme-to-json @testing-library/react-hooks"
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
