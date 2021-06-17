import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import useAuthProtecton from "../hooks/useAuthProtection";
import { AuthState } from "../redux/reducers/authReducer";
import { RootState } from "../redux/reducers/rootReducer";

export default function Home() {
  useAuthProtecton();

  const user = useSelector<RootState, AuthState["user"]>(
    (state) => state.auth.user
  );

  return (
    <Container className="py-5">
      <Card className="mb-4">
        <Card.Header>Welcome to YourPI!</Card.Header>
        <Card.Body>
          <Card.Title>
            You are logged in as {user?.firstname} {user?.lastname}.
          </Card.Title>
          <Card.Text>
            You won’t be able to access the home and account pages if you are
            not logged in.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Header>Introduction</Card.Header>
        <Card.Body>
          <Card.Title>An unofficial take on the YourPI.</Card.Title>
          <Card.Text>This api serves as a construction kit.</Card.Text>
          <Card.Text>
            <b>Watch Out: </b>You don't have to verify yourself with a token to
            access the API. The user interface and the products / categories are
            <b>not</b> related.
          </Card.Text>
          <Card.Text>
            The repository can be found on
            <a href="https://github.com/antar/REST-API">Github</a>. By default
            there are products and categories. These can be modified with CRUD.
          </Card.Text>
          <Card.Text>
            The User Authentication is made with
            <a href="https://github.com/firebase/php-jwt">JWT.</a>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Header>Getting Started</Card.Header>
        <Card.Body>
          <Card.Title>Database</Card.Title>
          <Card.Text>
            Create a new Database called <b>api_db</b>.
          </Card.Text>
          <Card.Text>
            Import each of the Importer Files at <b>/sql</b> to the Database.
          </Card.Text>
          <Card.Text>
            Change the credentials in <b>/api/config/database.php</b> with your
            informations.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Header>Information</Card.Header>
        <Card.Body>
          <Card.Title>For all calls you have to use the POST Method</Card.Title>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Header>
          Usage <b>Users</b>
        </Card.Header>
        <Card.Body>
          <Card.Title>Create User</Card.Title>
          <Card.Text>
            <code>https://api.wes.fm/api/user/create_user.php</code>
          </Card.Text>
          <Card.Text>
            <code>
              {`
                {
                  "firstname" : "string",
                  "lastname" : "string",
                  "email" : "string",
                  "password" : "string"
                }
              `}
            </code>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Header>
          Usage <b>Users</b>
        </Card.Header>
        <Card.Body>
          <Card.Title className="card-title">Create User</Card.Title>
          <Card.Text>
            <code>https://api.wes.fm/api/user/create_user.php</code>
          </Card.Text>
          <Card.Text>
            <code>
              {`
                {
                  "firstname" : "string",
                  "lastname" : "string",
                  "email" : "string",
                  "password" : "string"
                }
              `}
            </code>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title className="card-title">Login User</Card.Title>
          <Card.Text>
            <code>https://api.wes.fm/api/user/login.php</code>
          </Card.Text>
          <Card.Text>
            <code>
              {`
                {
                  "email" : "string",
                  "password" : "string"
                }
              `}
            </code>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>Validate Token</Card.Title>
          <Card.Text>
            <code>https://api.wes.fm/api/user/validate_token.php</code>
          </Card.Text>
          <Card.Text>
            <code>
              {`
                {
                  "jwt" : "string"
                }
              `}
            </code>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>Update User</Card.Title>
          <Card.Text>
            <code>https://api.wes.fm/api/user/update_user.php</code>
          </Card.Text>
          <Card.Text>
            <code>
              {`
                {
                  "firstname" : "string",
                  "lastname" : "string",
                  "email" : "string",
                  "password" : string"",
                  "jwt" : "string"			
                }
              `}
            </code>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Header>
          Usage <b>Products / Categories</b>
        </Card.Header>
        <Card.Body>
          <Card.Title>Read Products</Card.Title>
          <Card.Text>
            <code>https://api.wes.fm/api/product/read.php</code>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>Read Categories</Card.Title>
          <Card.Text>
            <code>https://api.wes.fm/api/category/read.php</code>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>Create Product</Card.Title>
          <Card.Text>
            <code>https://api.wes.fm/api/product/create.php</code>
          </Card.Text>
          <Card.Text>
            <code>
              {`
                {
                  "name" : "string",
                  "price" : "string",
                  "description" : "string",
                  "category_id" : int,
                  "created" : "string"			
                }
              `}
            </code>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>Read One Product</Card.Title>
          <Card.Text>
            <code>https://api.wes.fm/api/product/read_one?id=int.php</code>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>Update Product</Card.Title>
          <Card.Text>
            <code>https://api.wes.fm/api/product/update.php</code>
          </Card.Text>
          <Card.Text>
            <code>
              {`
                {
                  "id" : "string",
                  "name" : "string",
                  "price" : "string",
                  "description" : "string",
                  "category_id" : int,
                  "created" : "string"		
                }
              `}
            </code>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>Delete Product</Card.Title>
          <Card.Text>
            <code>https://api.wes.fm/api/product/delete.php</code>
          </Card.Text>
          <Card.Text>
            <code>
              {`
                {
                  "id" : "string"	
                }
              `}
            </code>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>Search Products</Card.Title>
          <Card.Text>
            <code>https://api.wes.fm/api/product/search.php?s=value</code>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title className="card-title">Paginate Products</Card.Title>
          <Card.Text>
            <code>https://api.wes.fm/api/product/read_paging.php</code>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
