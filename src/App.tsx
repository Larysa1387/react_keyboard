import React from 'react';

// export const App: React.FC = () => (
//   <div className="App">
//     <p className="App__message">The last pressed key is [Enter]</p>
//   </div>
// );

type State = {
  pressedKey: string;
};
export class App extends React.Component<State> {
  state: State = {
    pressedKey: '',
  };

  handleKeyDown = (event: KeyboardEvent) => {
    if (event.key) {
      this.setState({ pressedKey: event.key });
    }
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyDown);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyDown);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {!pressedKey ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">
            The last pressed key is{' '}
            <span className="App__message__key">[{pressedKey}]</span>
          </p>
        )}
      </div>
    );
  }
}
