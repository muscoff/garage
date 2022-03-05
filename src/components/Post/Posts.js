import React from 'react'
import MyContext from '../config/MyContext'
import TableList from './TableList'

export default function Posts() {
  return (
    <MyContext.Consumer>
        {(state)=>(
            <>
                <table className="table bordered striped font-helvetica">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <TableList posts={state.posts} />
                </table>
            </>
        )}
    </MyContext.Consumer>
  )
}
