import { Column, Entity, Index } from 'typeorm'
import { Recipe } from './recipe.entity'

export enum PizzaFlavor {
  Tomatoes = 'T',
  Cream = 'C'
}

@Entity()
export class Pizza extends Recipe {
  @Index({ unique: true })
  @Column({ length: 100 })
  name!: string

  @Index()
  @Column({ type: 'enum', enum: PizzaFlavor })
  flavor!: PizzaFlavor

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created!: Date

  @Column({ default: false })
  speciality!: boolean

  @Column()
  price!: number

  @Column({ nullable: true })
  end?: Date
}
