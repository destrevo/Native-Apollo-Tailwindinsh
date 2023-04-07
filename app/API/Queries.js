import { gql, useQuery } from '@apollo/client';

export const getProjects = gql`
query{
    projectCollection(limit: 10, skip: 0){
    items{
            name
            deadline
        }
        total
    }
}`
export const getTasks = gql`
query{
    taskCollection(limit: 10, skip: 0){
    items{
            name
        }
        total
    }
}`
