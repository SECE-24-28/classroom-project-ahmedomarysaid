// Simple MongoDB CRUD Operations Example
const { MongoClient, ObjectId } = require('mongodb');

// MongoDB connection URL and Database name
const url = 'mongodb://localhost:27017'; //  your MongoDB URL
const dbName = 'database1'; // your database name
const collectionName = 'users'; // your collection name

// Create a new MongoClient
const client = new MongoClient(url);

async function main() {
    try {
        // Connect to MongoDB
        await client.connect();
        console.log('Connected successfully to MongoDB');

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // 1. CREATE (Insert/Write Data)
        console.log('\n--- INSERT OPERATION ---');
        const newUser = { name: 'John Doe', email: 'john@example.com', age: 30 };
        const insertResult = await collection.insertOne(newUser);
        console.log(collection)
        console.log('Inserted document:', insertResult.insertedId);

        // Insert multiple documents
        const multipleUsers = [
            { name: 'Jane Smith', email: 'jane@example.com', age: 25 },
            { name: 'Bob Johnson', email: 'bob@example.com', age: 35 }
        ];
        const insertManyResult = await collection.insertMany(multipleUsers);
        console.log('Inserted multiple documents:', insertManyResult.insertedCount);

        // 2. READ (Get/Query Data)
        console.log('\n--- READ OPERATION ---');

        // Find all documents
        const allUsers = await collection.find({}).toArray();
        console.log('All users:', allUsers);

        // Find one document
        const oneUser = await collection.findOne({ name: 'John Doe' });
        console.log('Found user:', oneUser);

        // Find with filter
        const filteredUsers = await collection.find({ age: { $gte: 30 } }).toArray();
        console.log('Users aged 30 or more:', filteredUsers);

        // 3. UPDATE (Modify Data)
        console.log('\n--- UPDATE OPERATION ---');

        // Update one document
        const updateResult = await collection.updateOne(
            { name: 'John Doe' }, // Filter
            { $set: { age: 31, city: 'New York' } } // Update
        );
        console.log('Updated documents count:', updateResult.modifiedCount);

        // Update multiple documents
        const updateManyResult = await collection.updateMany(
            { age: { $lt: 30 } }, // Filter: age less than 30
            { $set: { status: 'young' } } // Update
        );
        console.log('Updated multiple documents:', updateManyResult.modifiedCount);

        // 4. DELETE (Remove Data)
        console.log('\n--- DELETE OPERATION ---');

        // Delete one document
        const deleteResult = await collection.deleteOne({ name: 'Bob Johnson' });
        console.log('Deleted documents count:', deleteResult.deletedCount);

        // Delete multiple documents
        const deleteManyResult = await collection.deleteMany({ age: { $lt: 30 } });
        console.log('Deleted multiple documents:', deleteManyResult.deletedCount);

        // Final read to see remaining data
        console.log('\n--- FINAL DATA ---');
        const finalUsers = await collection.find({}).toArray();
        console.log('Remaining users:', finalUsers);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Close the connection
        await client.close();
        console.log('\nConnection closed');
    }
}
// Run the main function
main();