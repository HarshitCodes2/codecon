export const TestContainer = () => {
  const chatMessages = [
    {
      id: "cm41w1xop00089uyk12hw5nl5",
      role: "User",
      content: "Create a counter app in react",
      createdAt: "2024-11-28T22:30:43.574Z",
      chatId: "cm41vmyzk00069uyktf7izikj",
    },
    {
      id: "cm41w279a000a9uykybmjz78j",
      role: "Assistant",
      content:
        '{"frontendCode": {"src/App.js": "\\"use strict\\";\\n\\nvar _react = _interopRequireDefault(require(\\"react\\"));\\n\\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \\"default\\": obj }; }\\n\\nfunction App() { var _useState = (0, _react.useState)(0), count = _useState[0], setCount = _useState[1];\\n  return ( _react.default.createElement(\\"div\\", null, _react.default.createElement(\\"h1\\", null, \\"Counter App\\"), _react.default.createElement(\\"p\\", null, \\"Count: \\", count), _react.default.createElement(\\"button\\", { onClick: function onClick() { return setCount(count + 1); } }, \\"Increment\\"), _react.default.createElement(\\"button\\", { onClick: function onClick() { return setCount(count - 1); } }, \\"Decrement\\")) );\\n}\\n\\n;export { App };\\", "src/Counter.js": "function Counter() {\\n  const [count, setCount] = React.useState(0);\\n  return (\\n    <div>\\n      <h1>Counter App</h1>\\n      <p>Count: {count}</p>\\n      <button onClick={() => setCount(count + 1)}>Increment</button>\\n      <button onClick={() => setCount(count - 1)}>Decrement</button>\\n    </div>\\n  );\\n}\\n\\nexport default Counter;","src/index.js": "\\"use strict\\";\\n\\nvar _react = _interopRequireDefault(require(\\"react\\"));\\n\\nvar _reactDom = _interopRequireDefault(require(\\"react-dom/client\\"));\\n\\nvar _App = require(\\"./App\\");\\n\\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \\"default\\": obj }; }\\n\\nvar container = document.getElementById(\'root\');\\nvar root = _reactDom.default.createRoot(container);\\nroot.render(_react.default.createElement(_App.App, null));", "public/index.html": "<!DOCTYPE html>\\n<html lang=\\"en\\">\\n<head>\\n    <meta charset=\\"UTF-8\\">\\n    <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0\\">\\n    <title>Counter App</title>\\n</head>\\n<body>\\n    <div id=\\"root\\"></div>\\n    <script src=\\"index.js\\"></script>\\n</body>\\n</html>"}, "backendCode": {}, "terminalCommands": [{"description": "Create React app", "command": "npx create-react-app counter-app"}, {"description": "Navigate into the project directory", "command": "cd counter-app"}, {"description": "Start the development server", "command": "npm start"}], "additionalNotes": "This setup uses create-react-app for simplicity.  For more advanced features or customization, consider using Vite or a similar build tool.  The counter app\'s state is entirely managed in the React component; no backend or database is required."}}',
      createdAt: "2024-11-28T22:30:56.062Z",
      chatId: "cm41vmyzk00069uyktf7izikj",
    },
    {
      id: "cm41w1xop00089uyk12hw5nl5",
      role: "User",
      content: "Create a counter app in react",
      createdAt: "2024-11-28T22:30:43.574Z",
      chatId: "cm41vmyzk00069uyktf7izikj",
    },
    {
      id: "cm41w279a000a9uykybmjz78j",
      role: "Assistant",
      content:
        '{"frontendCode": {"src/App.js": "\\"use strict\\";\\n\\nvar _react = _interopRequireDefault(require(\\"react\\"));\\n\\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \\"default\\": obj }; }\\n\\nfunction App() { var _useState = (0, _react.useState)(0), count = _useState[0], setCount = _useState[1];\\n  return ( _react.default.createElement(\\"div\\", null, _react.default.createElement(\\"h1\\", null, \\"Counter App\\"), _react.default.createElement(\\"p\\", null, \\"Count: \\", count), _react.default.createElement(\\"button\\", { onClick: function onClick() { return setCount(count + 1); } }, \\"Increment\\"), _react.default.createElement(\\"button\\", { onClick: function onClick() { return setCount(count - 1); } }, \\"Decrement\\")) );\\n}\\n\\n;export { App };\\", "src/Counter.js": "function Counter() {\\n  const [count, setCount] = React.useState(0);\\n  return (\\n    <div>\\n      <h1>Counter App</h1>\\n      <p>Count: {count}</p>\\n      <button onClick={() => setCount(count + 1)}>Increment</button>\\n      <button onClick={() => setCount(count - 1)}>Decrement</button>\\n    </div>\\n  );\\n}\\n\\nexport default Counter;","src/index.js": "\\"use strict\\";\\n\\nvar _react = _interopRequireDefault(require(\\"react\\"));\\n\\nvar _reactDom = _interopRequireDefault(require(\\"react-dom/client\\"));\\n\\nvar _App = require(\\"./App\\");\\n\\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \\"default\\": obj }; }\\n\\nvar container = document.getElementById(\'root\');\\nvar root = _reactDom.default.createRoot(container);\\nroot.render(_react.default.createElement(_App.App, null));", "public/index.html": "<!DOCTYPE html>\\n<html lang=\\"en\\">\\n<head>\\n    <meta charset=\\"UTF-8\\">\\n    <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0\\">\\n    <title>Counter App</title>\\n</head>\\n<body>\\n    <div id=\\"root\\"></div>\\n    <script src=\\"index.js\\"></script>\\n</body>\\n</html>"}, "backendCode": {}, "terminalCommands": [{"description": "Create React app", "command": "npx create-react-app counter-app"}, {"description": "Navigate into the project directory", "command": "cd counter-app"}, {"description": "Start the development server", "command": "npm start"}], "additionalNotes": "This setup uses create-react-app for simplicity.  For more advanced features or customization, consider using Vite or a similar build tool.  The counter app\'s state is entirely managed in the React component; no backend or database is required."}}',
      createdAt: "2024-11-28T22:30:56.062Z",
      chatId: "cm41vmyzk00069uyktf7izikj",
    },
    {
      id: "cm41w1xop00089uyk12hw5nl5",
      role: "User",
      content: "Create a counter app in react",
      createdAt: "2024-11-28T22:30:43.574Z",
      chatId: "cm41vmyzk00069uyktf7izikj",
    },
    {
      id: "cm41w279a000a9uykybmjz78j",
      role: "Assistant",
      content:
        '{"frontendCode": {"src/App.js": "\\"use strict\\";\\n\\nvar _react = _interopRequireDefault(require(\\"react\\"));\\n\\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \\"default\\": obj }; }\\n\\nfunction App() { var _useState = (0, _react.useState)(0), count = _useState[0], setCount = _useState[1];\\n  return ( _react.default.createElement(\\"div\\", null, _react.default.createElement(\\"h1\\", null, \\"Counter App\\"), _react.default.createElement(\\"p\\", null, \\"Count: \\", count), _react.default.createElement(\\"button\\", { onClick: function onClick() { return setCount(count + 1); } }, \\"Increment\\"), _react.default.createElement(\\"button\\", { onClick: function onClick() { return setCount(count - 1); } }, \\"Decrement\\")) );\\n}\\n\\n;export { App };\\", "src/Counter.js": "function Counter() {\\n  const [count, setCount] = React.useState(0);\\n  return (\\n    <div>\\n      <h1>Counter App</h1>\\n      <p>Count: {count}</p>\\n      <button onClick={() => setCount(count + 1)}>Increment</button>\\n      <button onClick={() => setCount(count - 1)}>Decrement</button>\\n    </div>\\n  );\\n}\\n\\nexport default Counter;","src/index.js": "\\"use strict\\";\\n\\nvar _react = _interopRequireDefault(require(\\"react\\"));\\n\\nvar _reactDom = _interopRequireDefault(require(\\"react-dom/client\\"));\\n\\nvar _App = require(\\"./App\\");\\n\\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \\"default\\": obj }; }\\n\\nvar container = document.getElementById(\'root\');\\nvar root = _reactDom.default.createRoot(container);\\nroot.render(_react.default.createElement(_App.App, null));", "public/index.html": "<!DOCTYPE html>\\n<html lang=\\"en\\">\\n<head>\\n    <meta charset=\\"UTF-8\\">\\n    <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0\\">\\n    <title>Counter App</title>\\n</head>\\n<body>\\n    <div id=\\"root\\"></div>\\n    <script src=\\"index.js\\"></script>\\n</body>\\n</html>"}, "backendCode": {}, "terminalCommands": [{"description": "Create React app", "command": "npx create-react-app counter-app"}, {"description": "Navigate into the project directory", "command": "cd counter-app"}, {"description": "Start the development server", "command": "npm start"}], "additionalNotes": "This setup uses create-react-app for simplicity.  For more advanced features or customization, consider using Vite or a similar build tool.  The counter app\'s state is entirely managed in the React component; no backend or database is required."}}',
      createdAt: "2024-11-28T22:30:56.062Z",
      chatId: "cm41vmyzk00069uyktf7izikj",
    },
  ];

  return (
    <>
      <div
        className={`w-10/12 max-h-[75vh] mx-auto justify-end overflow-y-scroll`}
      >
        {chatMessages
          ? chatMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "User" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`${
                    message.role === "User" ? "bg-blue-500" : "bg-gray-500"
                  } text-white p-2 rounded-lg w-10/12`}
                >
                  {message.content}
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};
