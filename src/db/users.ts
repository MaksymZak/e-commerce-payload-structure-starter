import { getPayloadClient } from './client'

export const seedUsers = async () => {
  const payload = await getPayloadClient()

  console.log('👤 Creating admin user...')

  // Create the admin user
  await payload.create({
    collection: 'users',
    data: {
      name: 'Maks',
      email: 'test@gmail.com',
      password: '123456',
    },
  })

  console.log('✅ Admin user created: test@gmail.com')
  console.log('🌱 Database seeded successfully')
}
