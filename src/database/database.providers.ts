import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(
        'mongodb+srv://nest:m4914Qo6RWP7>@nestexample.en69k.mongodb.net/nestexample',
      ),
  },

  /* m4914Qo6RWP7 */
];
