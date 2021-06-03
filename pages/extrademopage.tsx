import { useQuery, gql } from "@apollo/client";

    const authorsQuery = gql`
    {
        users {
          nodes {
            firstName
            lastName
            roles {
              nodes {
                displayName
              }
            }
          }
        }
      }      
    `;


const ExtraDemoPage = () => {
    const { data } = useQuery(authorsQuery)

    
    const authors = data?.users?.nodes ?? [];
    console.log(authors)

    return (

    <>
    <h1>Extra Demo Page</h1>;
    <h3>It is much easier to create custom pages with custom features</h3>

    <ol>
        {authors.map((author:any) => <li>
            <p>{author.firstName} {author.lastName}</p>
        </li>)}
    </ol>
    </>
    )

}

export default ExtraDemoPage