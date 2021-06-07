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

    const announcementsQuery = gql`
    {
      announcements {
        nodes {
          date
          title
          content
        }
      }
    }    
    `;


const ExtraDemoPage = () => {
    const { data } = useQuery(announcementsQuery)
    // const { datab } = useQuery(announcementsQuery)

    
    // const authors = data?.users?.nodes ?? [];
    // console.log(authors)

    const announcements = data?.announcements?.nodes ?? [];
    console.log(announcements)
    return (

    <>
    <h1>Extra Demo Page</h1>;
    <h3>It is much easier to create custom pages with custom features</h3>

    {/* <ol>
        {authors.map((author:any) => <li>
            <p>{author.firstName} {author.lastName}</p>
        </li>)}
    </ol> */}
    
    <ul>
      {announcements.map((announcement: any) => <li>
            <h3>{announcement.title}</h3>
            <p>{announcement.content}</p>
            <p>{announcement.date}</p>
        </li>)}
    </ul>
    </>
    )

}

export default ExtraDemoPage