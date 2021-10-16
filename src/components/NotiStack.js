import { withSnackbar } from "notistack";

class MyComponent extends Component {
  handleConnectionLoss = () => {
    this.key = this.props.enqueueSnackbar("You're offline.");
  };

  handleBackOnline = () => {
    this.props.closeSnackbar(this.key);
  };

  render() {
    //...
  }
}

export default withSnackbar(MyComponent);
