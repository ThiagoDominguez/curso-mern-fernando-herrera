import Enzyme from "enzyme";
import "@testing-library/jest-dom/extend-expect";
import Adapter from "@cfaester/enzyme-adapter-react-18";

Enzyme.configure({ adapter: new Adapter() });
import { createSerializer } from "enzyme-to-json";

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
