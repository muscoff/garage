import React from 'react'

export default function TableList({posts}) {
    const list = posts.map(({title, body}, index) =>(
        <React.Fragment key={index}>
            <tr>
                <td><p className="capitalize">{title}</p></td>
                <td><p>{body}</p></td>
            </tr>
        </React.Fragment>
    ))
  return (
    <tbody>{list}</tbody>
  )
}
