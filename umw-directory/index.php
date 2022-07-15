<?php include 'inc/header.php' ?>
<h1 class="h1">Employee Directory</h1>
<div class="table-responsive">
	<table class="table table-striped">
		<thead>
			<tr>
				<th scope="col">Name</th>
				<th scope="col">Title</th>
				<th scope="col">Location</th>
				<th scope="col">Phone</th>
				<th scope="col">Email</th>
				<th scope="col">Department</th>
			</tr>
		</thead>
		<tbody>
			<?php

			// Create connection
			$connection = new mysqli("localhost", "root", "", "umw_directory");

			// Check connection
			if ($connection->connect_error) {
				die("Connection failed: " . $connection->connect_error);
			}

			// Read all rows from db table
			$sql = "SELECT * FROM employees";
			$result = $connection->query($sql);

			if (!$result) {
				die("Invalid query: " . $connection->error);
			}

			// Read data of each row
			while ($row = $result->fetch_assoc()) {
				echo "<tr>
									<td>" . $row["name"] . "</td>
									<td>" . $row["title"] . "</td>
									<td>" . $row["location"] . "</td>
									<td>" . $row["phone"] . "</td>
									<td>" . $row["email"] . "</td>
									<td>" . $row["department"] . "</td>
							</tr>";
			}
			?>
		</tbody>
	</table>
</div>
<?php include 'inc/footer.php' ?>