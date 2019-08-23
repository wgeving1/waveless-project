import React from 'react';
import { Page, Content } from './styles';

const UserTable = props => {
  <Page>
    <Content>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0? (
            props.users.map(user => (
              <tr key={user.id}>
                <td>Name data</td>
                <td>Username data</td>
                <td>
                  <button className="button muted-button">Edit</button>
                  <button className="button muted-button">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No users</td>
            </tr>
          )}
        </tbody>
      </table>
    </Content>
  </Page>
}

export default UserTable