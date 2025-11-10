export interface User {
  id: string
  name: string
  email: string
  role: 'CLIENT' | 'BARBER' | 'ADMIN'
  avatar?: string
  phone?: string
  createdAt: Date
  updatedAt: Date
}

export interface Salon {
  id: string
  name: string
  description: string
  address: string
  phone: string
  email: string
  logo?: string
  cover?: string
  rating: number
  totalReviews: number
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Service {
  id: string
  name: string
  description: string
  duration: number // em minutos
  price: number
  image?: string
  category: string
  isActive: boolean
  salonId: string
  createdAt: Date
  updatedAt: Date
}

export interface Appointment {
  id: string
  date: Date
  time: string
  status: 'PENDING' | 'CONFIRMED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED'
  notes?: string
  totalPrice: number
  clientId: string
  barberId: string
  salonId: string
  serviceId: string
  createdAt: Date
  updatedAt: Date
}

export interface Plan {
  id: string
  name: string
  description: string
  price: number
  cutsPerMonth: number
  features: string[]
  isPopular: boolean
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Subscription {
  id: string
  status: 'ACTIVE' | 'CANCELLED' | 'EXPIRED'
  startDate: Date
  endDate: Date
  cutsUsed: number
  autoRenew: boolean
  userId: string
  planId: string
  createdAt: Date
  updatedAt: Date
}

export interface HaircutModel {
  id: string
  name: string
  description: string
  image: string
  category: string
  difficulty: 'EASY' | 'MEDIUM' | 'HARD'
  estimatedTime: number
  price: number
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Review {
  id: string
  rating: number
  comment: string
  appointmentId: string
  clientId: string
  barberId: string
  salonId: string
  createdAt: Date
  updatedAt: Date
}
