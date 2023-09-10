'use client'
import Post from '../../components/posts/Post'
import { DrupalClient } from 'next-drupal'
import { useState, useEffect } from 'react'

const drupal = new DrupalClient('https://dev-deep-dives.pantheonsite.io', {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
})

async function getPosts() {
  const data = await drupal.getResourceCollection('node--post')
  return data
}

export default function Page() {
  let postsData = getPosts()
  let [posts, setPosts] = useState(postsData)

  useEffect(() => {
    async function getPosts() {
      const data = await drupal.getResourceCollection('node--post')
      setPosts(data)
    }
    getPosts()
  }, []
  )

  return (
    <main>
      <h2>Posts from Drupal</h2>
      <ul>
        {posts.length > 0 && posts.map((post) => {
          console.log(post)
          return (
            <li key={post.id}>
              <h3>Title: {post.title} </h3>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
