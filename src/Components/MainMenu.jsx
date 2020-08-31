import React from "react";
import DisplayMenuByName from "./DisplayMenuByName";

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [],
      subMenuCategory: "",
      subMenuList: [],
    };
  }

  // window.onLoad
  componentDidMount() {
    fetch("http://stream-restaurant-menu-svc.herokuapp.com/category")
      .then((resp) => resp.json())
      .then((data) => {
        //console.log(data);
        this.setState({ menuList: data });
      });
  }

  // called when item.onClick
  dispalySubMenu = (category) => {
    // AJAX -- Asynchronous HTTPRequest -- REST API Call
    fetch(
      `http://stream-restaurant-menu-svc.herokuapp.com/item?category=${category}`
    )
      .then((response) => {
        return response.json();
      })
      .then((getting_data) => {
        this.setState({
          subMenuCategory: category,
          subMenuList: getting_data,
        });
      });
  };

  render() {
    return (
      <div className="row">
        <div className="col-lg-4">
          <h1>Menu Categories</h1>
          <ul>
            {this.state.menuList.map((val, index) => (
              <li
                key={index}
                onClick={() => this.dispalySubMenu(val.short_name)}
              >
                {val.name}({val.short_name})
              </li>
            ))}
          </ul>
        </div>

        {this.state.subMenuCategory.length > 0 && (
          <div className="col-lg-8 menutable">
            <h1>Items in Category: {this.state.subMenuCategory}</h1>
            <table>
              <tr>
                <th>Name</th>
                <th>Description</th>
              </tr>

              {this.state.subMenuList.map((subMenuItem) => (
                <DisplayMenuByName
                  key={subMenuItem.id}
                  subMenuItem={subMenuItem}
                />
              ))}
            </table>
          </div>
        )}
      </div>
    );
  }
}
export default MainMenu;
